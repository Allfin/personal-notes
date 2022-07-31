import React, { useState } from "react";

const AddNote = ({ setNotes, notes, addNoteHandler }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const addNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    };

    setNotes(notes.concat(newNote));
    setTitle("");
    setBody(" ");
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Masukan judul..."
          value={title}
          onChange={titleHandler}
        />
        <textarea
          value={body}
          placeholder="Masukan Isi Note..."
          cols="30"
          rows="10"
          onChange={bodyHandler}
        ></textarea>
        <button type="submit" className="button">
          Buat
        </button>
      </form>
    </div>
  );
};

export default AddNote;
