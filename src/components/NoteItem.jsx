import React from "react";

const NoteItem = ({ note, onArchive, onDelete }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h2 className="note-item__title">
          <b>{note.title}</b>
        </h2>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(note.id)}
        >
          Arsipkan
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
