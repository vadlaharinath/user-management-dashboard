import React from "react";
import "../Styles/UserTable.css";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>

              <td>{user.firstName}</td>

              <td>{user.lastName}</td>

              <td>{user.email}</td>

              <td>{user.department}</td>

              <td>
                <button className="edit-btn" onClick={() => onEdit(user)}>
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
