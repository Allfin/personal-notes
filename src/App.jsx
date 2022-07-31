import React from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="note-app__body">
        <AddNote />
      </main>
    </>
  );
};

export default App;
