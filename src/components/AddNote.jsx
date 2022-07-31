import React from "react";

const AddNote = () => {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <input type="text" placeholder="Masukan judul..." />
      <textarea
        placeholder="Masukan Isi Note..."
        cols="30"
        rows="10"
      ></textarea>

      <button className="button">Buat</button>
    </div>
  );
};

export default AddNote;
