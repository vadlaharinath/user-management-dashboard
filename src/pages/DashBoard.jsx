import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../api/userApi";
import "../Styles/Dashboard.css";

import SearchBar from "../Component/SearchBar";
import FilterBar from "../Component/FilterBar";
import SortBar from "../Component/SortBar";
import UserTable from "../Component/UserTable";
import Pagination from "../Component/Pagination";
import UserForm from "../Component/UserForm";

const Dashboard = () => {
  // Users Data
  const [users, setUsers] = useState([]);

  // Search
  const [search, setSearch] = useState("");

  // Filter
  const [department, setDepartment] = useState("");

  // Sort
  const [sortBy, setSortBy] = useState("firstName");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  // Form
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Load Users
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await getUsers();

      const usersData = res.data.map((user) => {
        const names = user.name.split(" ");

        return {
          ...user,
          firstName: names[0],
          lastName: names.slice(1).join(" "),
          department: ["IT", "HR", "Sales", "Marketing"][user.id % 4],
        };
      });

      setUsers(usersData);
    } catch (error) {
      console.log(error);
    }
  };

  // Add User OR Update User
  const handleSaveUser = async (userData) => {
    try {
      // EDIT
      if (editingUser) {
        await updateUser(editingUser.id, userData);

        const updatedUsers = users.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                ...userData,
              }
            : user,
        );

        setUsers(updatedUsers);
      }

      // ADD
      else {
        await addUser(userData);

        const newUser = {
          ...userData,
          id: Date.now(),
        };

        setUsers([newUser, ...users]);
      }

      setEditingUser(null);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Open Edit Form
  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // Delete User
  const handleDeleteUser = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete?");

      if (!confirmDelete) return;

      await deleteUser(id);

      const updatedUsers = users.filter((user) => user.id !== id);

      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  // SEARCH
  const searchedUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()),
  );

  // FILTER
  const filteredUsers = searchedUsers.filter((user) =>
    department === "" ? true : user.department === department,
  );

  // SORT
  const sortedUsers = [...filteredUsers];

  sortedUsers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  // PAGINATION
  const startIndex = (currentPage - 1) * pageSize;

  const paginatedUsers = sortedUsers.slice(startIndex, startIndex + pageSize);

  const totalPages = Math.ceil(sortedUsers.length / pageSize);

  return (
    <div className="dashboard">
      {/* Header */}

      <div className="header">
        <h1>User Management Dashboard</h1>

        <button
          className="add-user-btn"
          onClick={() => {
            setEditingUser(null);
            setShowForm(true);
          }}
        >
          + Add User
        </button>
      </div>

      {/* Form */}

      {showForm && (
        <UserForm
          onSave={handleSaveUser}
          editingUser={editingUser}
          onCancel={() => {
            setShowForm(false);
            setEditingUser(null);
          }}
        />
      )}

      {/* Search */}

      <SearchBar search={search} setSearch={setSearch} />

      {/* Filter */}

      <FilterBar department={department} setDepartment={setDepartment} />

      {/* Sort */}

      <SortBar sortBy={sortBy} setSortBy={setSortBy} />

      {/* Table */}

      <UserTable
        users={paginatedUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Dashboard;
