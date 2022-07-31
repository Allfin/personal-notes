import React from "react";

const Header = ({ query }) => {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <form>
        <input type="text" placeholder="Cari catatan..." onChange={query} />
      </form>
    </header>
  );
};

export default Header;
