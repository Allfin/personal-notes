import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes }) => {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default NoteList;
