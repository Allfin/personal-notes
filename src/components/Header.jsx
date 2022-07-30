import React from "react";

const Header = () => {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <form>
        <input type="text" placeholder="Cari catatan..." />
      </form>
    </header>
  );
};

export default Header;
