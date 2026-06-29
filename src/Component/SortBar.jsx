import React from "react";
import "../Styles/SortBar.css";

const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-container">
      <label className="sort-label">Sort By:</label>

      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="firstName">First Name</option>

        <option value="lastName">Last Name</option>

        <option value="email">Email</option>
      </select>
    </div>
  );
};

export default SortBar;
