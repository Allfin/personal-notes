import React from "react";
import NoteItem from "./NoteItem";

const Archive = ({ notes }) => {
  const notesArchive = notes.filter((note) => note.archived);

  return (
    <div className="archive">
      <h2>Arsip</h2>
      <div className="notes-list">
        {notesArchive.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Archive;
