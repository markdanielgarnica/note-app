import React from "react";
import api from "../axios_config/api";
import EditIcon from "../assets/editing.png";
import DeleteIcon from "../assets/delete.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/note/noteSlice";
function DropdownList({
  noteId,
  isOnTreshold,
  handleNoteDropdownIndex,
  handleShowRenameTitleForm,
  handleNoteDeleting,
  setNoteIdDelete,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function onDeleteNote() {
    try {
      handleNoteDeleting(true);
      setNoteIdDelete(noteId);
      const notes = await dispatch(deleteNote(noteId)).unwrap();
      if (!notes.length) {
        navigate("/note", { replace: true });
        return;
      }
      const firstNoteId = notes[0]._id;
      navigate(`/note/${firstNoteId}`, { replace: true });
    } catch (err) {
      console.log(err);
    } finally {
      handleNoteDeleting(false);
      handleNoteDropdownIndex(null);
      setNoteIdDelete(null);
    }

    // api
    //   .delete("/notes", {
    //     data: { noteId },
    //   })
    //   .then(({ data }) => {
    //     if (!data.notes.length) {
    //       navigate("/note", { replace: true });
    //       setNotes({ data: [], status: "resolved" });
    //       return;
    //     }
    //     setNotes({ data: data.notes, status: "resolved" });
    //     const firstNoteId = data.notes[0]._id;
    //     navigate(`/note/${firstNoteId}`, { replace: true });
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    // handleNoteDeleting(false);
    // handleNoteDropdownIndex(null);
    // setNoteIdDelete(null);
    //   });
  }

  return (
    <ul
      className={`${isOnTreshold} absolute shadow-xl bg-white right-2 w-36 z-30 border rounded-md h-20 flex flex-col`}
    >
      <li
        onClick={() => handleShowRenameTitleForm(true)}
        className="font-normal hover:bg-slate-200 px-2 cursor-pointer flex flex-row items-center flex-1"
      >
        <div className="w-4">
          <img src={EditIcon} className="w-full" />
        </div>
        <p className="text-sm">Rename</p>
      </li>
      <li
        onClick={onDeleteNote}
        className="font-normal hover:bg-slate-200 px-2 cursor-pointer flex flex-row items-center flex-1"
      >
        <div className="w-4">
          <img src={DeleteIcon} className="w-full" />
        </div>
        <p className="text-sm">Delete</p>
      </li>
    </ul>
  );
}

export default DropdownList;
