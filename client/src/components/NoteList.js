import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

function NoteList({ handleNoteDeleting, setNoteIdDelete }) {
  const [noteDropdownIndex, setNoteDropdownIndex] = useState(null);
  const data = useSelector((state) => state.note);
  function handleNoteDropdownIndex(indexNum) {
    setNoteDropdownIndex(indexNum);
  }
  return (
    <>
      {data.status === "loading" ? (
        <h1>Loading notes...</h1>
      ) : data.status === "resolved" && data.notes.length ? (
        data.notes.map((note, idx) => (
          <Note
            id={note._id}
            content={note.content}
            title={note.title}
            key={note._id}
            idx={idx}
            noteDropdownIndex={noteDropdownIndex}
            handleNoteDropdownIndex={handleNoteDropdownIndex}
            handleNoteDeleting={handleNoteDeleting}
            setNoteIdDelete={setNoteIdDelete}
          />
        ))
      ) : null}
    </>
  );
}

export default NoteList;
