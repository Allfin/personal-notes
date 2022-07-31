import React from "react";
import { useState } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";

const App = () => {
  const [notes, setNotes] = useState(getInitialData);
  const [query, setQuery] = useState("");

  const deleteHandler = (id) => {
    const noteHandler = notes.filter((note) => note.id !== id);
    setNotes(noteHandler);
  };

  const archivedHandler = (id) => {
    const archives = [...notes];
    const index = notes.findIndex((note) => note.id === id);
    archives[index].archived = archives[index].archived ? false : true;
    setNotes(archives);
  };

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Header searchHandler={searchHandler} query={query} setQuery={setQuery} />
      <main className="note-app__body">
        <AddNote setNotes={setNotes} notes={notes} />
        <h2>Catatan</h2>
        <NoteList
          notes={notes}
          query={query}
          onDelete={deleteHandler}
          onArchive={archivedHandler}
        />
        <h2>Arsip</h2>
        <NoteList
          notes={notes}
          query={query}
          isArchived={true}
          onDelete={deleteHandler}
          onArchive={archivedHandler}
        />
      </main>
    </>
  );
};

export default App;
