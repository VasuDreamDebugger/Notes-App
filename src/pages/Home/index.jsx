import { useState, useReducer } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useNote } from "../../contexts/notesContext";
import { v4 as uuid } from "uuid";
import NotesDisplay from "../../components/NotesDisplay";

export default function Home() {
  const [title, setTitle] = useState("");
  const [descrip, setDescrip] = useState("");
  //const {note,setNote} = useNote();
  const { note, dispatchNote } = useNote();

  const onClickAdd = () => {
    const newNote = {
      id: uuid(),
      title: title,
      descrip: descrip,
      isArchived: false,
    };

    dispatchNote({
      type: "ADD_NOTE",
      payload: newNote,
    });
    setTitle("");
    setDescrip("");
  };

  return (
    <div>
      {/* <Header /> */}
       
        {/* <Sidebar /> */}
        <div className="flex flex-col w-full   ">
          {/* <section className="flex  items-center flex-col pt-8 ">
          <div className="note-header">
            <input
              className="border w-sm m-3"
              type="text"
              placeholder="Notes Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
          </div>
          <div>
            <textarea
              className="border w-[390px] mt-1 ml-3"
              placeholder="Write your note..."
              onChange={(e) => {
                setDescrip(e.target.value);
              }}  
              value={descrip}
            />
          </div>
          <button className="bg-green-400 border w-20" onClick={onClickAdd}>Save</button>
        </section> */}
          <section className="flex flex-col items-center pt-10 px-4">
            <div className="note-header w-full max-w-lg">
              <input
                className="w-lg rounded-xl px-5 py-3 text-lg bg-gray-50 shadow-inner 
                 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-gray-300 
                 outline-none transition duration-300 ease-in-out"
                type="text"
                placeholder="Notes Title..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>

            <div className="w-full max-w-lg mt-5">
              <textarea
                className="w-full rounded-xl px-5 py-4 text-base bg-gray-50 shadow-inner resize-none
                 focus:bg-white focus:shadow-lg focus:ring-2 focus:ring-gray-300 
                 outline-none transition duration-300 ease-in-out"
                rows="6"
                placeholder="Write your note..."
                onChange={(e) => setDescrip(e.target.value)}
                value={descrip}
              />
            </div>

            <button
              className="mt-6 w-36 py-3 bg-blue-300 text-white font-semibold rounded-xl shadow-md 
               hover:bg-blue-500 hover:shadow-lg hover:scale-105 active:scale-95 
               transition-all duration-300 ease-in-out"
              onClick={onClickAdd}
            >
              Save
            </button>
          </section>

          <div className="flex flex-wrap justify-center mt-10 overflow-y-auto">
            <NotesDisplay />
          </div>
        </div>
      
    </div>
  );
}
