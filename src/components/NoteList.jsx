import React from "react";
import { useState } from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, query, onArchive, onDelete, isArchived = false }) {
  const notesList = notes.filter((note) =>
    isArchived ? note.archived === true : note.archived === false
  );

  return (
    <div className="notes-list">
      {notesList.length < 1 ? (
        <p className="note__empty">
          Tidak ada catatan {isArchived ? "yang diarsipkan" : ""}
        </p>
      ) : (
        notesList
          .filter((note) =>
            note.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((note) => (
            <NoteItem
              key={note.id}
              onArchive={onArchive}
              // onDelete={onDelete}
              note={note}
            />
          ))
      )}
    </div>
  );
}

export default NoteList;
