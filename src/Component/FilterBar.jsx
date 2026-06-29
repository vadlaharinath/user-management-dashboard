import React from "react";
import "../Styles/FilterBar.css";

const FilterBar = ({ department, setDepartment }) => {
  return (
    <div className="filter-container">
      <label className="filter-label">Department:</label>

      <select
        className="filter-select"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>

        <option value="IT">IT</option>

        <option value="HR">HR</option>

        <option value="Sales">Sales</option>

        <option value="Marketing">Marketing</option>
      </select>
    </div>
  );
};

export default FilterBar;
