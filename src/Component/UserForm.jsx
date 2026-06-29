import React from "react";
import "../Styles/UserForm.css";

import { useState, useEffect } from "react";

const UserForm = ({ onSave, editingUser,onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "IT",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      department: "IT",
    });
  };

  return (
    <div className="form-overlay">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>{editingUser ? "Edit User" : "Add User"}</h2>

        <input
          className="form-input"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />

        <input
          className="form-input"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />

        <input
          className="form-input"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          className="form-select"
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option>IT</option>
          <option>HR</option>
          <option>Sales</option>
          <option>Marketing</option>
        </select>

        <button className="save-btn" type="submit">
          {editingUser ? "Update User" : "Add User"}
        </button>
        <button className="save-btn"  onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
