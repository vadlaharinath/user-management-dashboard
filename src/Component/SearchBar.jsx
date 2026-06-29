

import React from "react";
import "../Styles/SearchBar.css";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-container">

      <input
        className="search-input"
        type="text"
        placeholder="Search Name Or Email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
};

export default SearchBar;