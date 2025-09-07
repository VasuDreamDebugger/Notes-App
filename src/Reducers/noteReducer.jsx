
const noteReducer=(state, action) => {
    console.log("Reducer called with action:", action);
    switch (action.type) {
      case "ADD_NOTE":
            return {
                ...state,
                note: [...state.note, action.payload],
            };

        case "ARCHIVE_NOTE":
              
                return {
                    ...state,
                    note:state.note.map((node)=> node.id === action.payload ? {...node, isArchived: !node.isArchived} : node), 
                    
                };  
        case "RESTORE_NOTE":
                const restoredNote = state.deletedNotes.find(
                  (note) => note.id === action.payload
                );
                return {
                    ...state,
                    deletedNotes: state.deletedNotes.filter((node)=> node.id !== action.payload),
                    note: [...state.note, restoredNote],
                };          
             
        case "DELETE_NOTE":
                const deletedNode = state.note.find(
                  (note) => note.id === action.payload
                );
                 
                return {
                    ...state,
                    note: state.note.filter((node)=> node.id !== action.payload),
                    deletedNotes: [...state.deletedNotes, deletedNode],
                };

        default:
            return state;
    }
};

export default noteReducer;