import { useNote } from "../../contexts/notesContext";

export default function NotesDisplay() {
  const { deletedNotes, dispatchNote } = useNote();
  //  const ArchivedNotes = note.filter((note) => note.isArchived);

  return (
    <div className=" min p-8 ">
      <h1 className="text-[30px] m-3">Archived Notes</h1>
      <div className="flex flex-wrap ">
        {deletedNotes.map(({ id, title, descrip }) => (
          <div
            key={id}
            className="bg-gray-100 w-md m-3 grid shadow-inner p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
              <span class="material-symbols-outlined" onClick={()=> dispatchNote({type:"RESTORE_NOTE",payload:id})}>restore_from_trash</span>
            </div>

            <hr className="my-3" />

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{descrip}</p>

            {/* Action Icons */}
            <div className="flex justify-end gap-5 mt-4">
              {/* <span
              className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-blue-500 
                     transition-transform duration-300 hover:rotate-180"
                onClick={() => dispatchNote({ type: "ARCHIVE_NOTE", payload: id })}
            >
              archive
            </span>
            <span
              className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-red-500 
                     transition-transform duration-300 hover:scale-125 hover:-rotate-6"
              onClick={() => dispatchNote({ type: "DELETE_NOTE", payload: id })}
            >
              delete
            </span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
