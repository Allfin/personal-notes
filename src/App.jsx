import React from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";

const App = () => {
  return (
    <>
      <Header />
      <main className="note-app__body">
        <AddNote />
        <NoteList notes={getInitialData} />
      </main>
    </>
  );
};

export default App;
