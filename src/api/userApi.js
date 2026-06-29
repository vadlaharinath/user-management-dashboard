import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

// GET USERS
export const getUsers = () => axios.get(API);

// ADD USER
export const addUser = (user) => axios.post(API, user);

// UPDATE USER
export const updateUser = (id, user) =>
  axios.put(`${API}/${id}`, user);

// DELETE USER
export const deleteUser = (id) =>
  axios.delete(`${API}/${id}`);
