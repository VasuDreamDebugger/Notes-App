import {useContext,createContext,useReducer} from "react";
import noteReducer from "../Reducers/noteReducer";

const NoteContext = createContext();

const NoteProvider = ({children}) => {
    const initialNoteState = {
        note: [],
        deletedNotes: [],
    };

    // const notesReducer = (state, action) => {
    //     switch (action.type) {
    //       case "ADD_NOTE":      

    //             return [...state, action.payload];
    //         case "DELETE_NOTE":
    //                 const updatedNotes = state.filter(
    //                   (note) => note.id !== action.payload
    //                 );
    //                 return updatedNotes;
    //         default:
    //             return state;
    //     }
    // };

    const [{note,deletedNotes}, dispatchNote] = useReducer(noteReducer, initialNoteState);

    return (
        <NoteContext.Provider value={{note,deletedNotes, dispatchNote}}>
            {children}
        </NoteContext.Provider>
    );
};

const useNote = () => useContext(NoteContext);  

export {NoteProvider, useNote};