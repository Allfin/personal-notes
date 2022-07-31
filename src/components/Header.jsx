import React from "react";

const Header = ({ searchHandler, query, setQuery }) => {
  const searchSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };

  return (
    <header className="note-app__header">
      <h1>Notes</h1>

      <form onSubmit={searchSubmit}>
        <input
          type="text"
          value={query}
          placeholder="Cari catatan..."
          onChange={searchHandler}
        />
      </form>
    </header>
  );
};

export default Header;
