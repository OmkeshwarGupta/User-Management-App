import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";  // Importing ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Importing toast styles
import AddUserForm from "./components/AddUserForm";
import UpdateUserForm from "./components/UpdateUserForm";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error);  // Show error toast
    }
  };

  const addUser = async (user) => {
    try {
      await axios.post("http://localhost:5000/api/users", user);
      fetchUsers();
      setShowForm(false);
      toast.success("User added successfully!");  // Success toast
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user!");  // Error toast
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${id}`, updatedUser);
      fetchUsers();
      setShowForm(false);
      setEditMode(false);
      setCurrentUserId(null);
      toast.success("User updated successfully!");  // Success toast
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user!");  // Error toast
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      toast.success("User deleted successfully!");  // Success toast
    } catch (err) {
      console.error("Failed to delete user:", err);
      toast.error("Error deleting user!");  // Error toast
    }
  };

  const handleEdit = (user) => {
    setEditMode(true); 
    setCurrentUserId(user._id); // Set userId to the ID of the user to be edited
    setShowForm(true); // Show the form for updating
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">User List</h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditMode(false); // Reset edit mode when adding new user
              setCurrentUserId(null);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            {showForm ? "Close Form" : "Add User"}
          </button>
        </div>

        <div className="space-y-4">
          {users.length === 0 ? (
            <p className="text-gray-500 text-center">No users found. Add a user to get started!</p>
          ) : (
            users.map((user) => (
              <UserCard
                key={user._id}
                user={user}
                onEdit={handleEdit}
                onDelete={deleteUser}
              />
            ))
          )}
        </div>

        {/* Conditionally render Add or Update Form */}
        {showForm && (
          editMode ? (
            <UpdateUserForm
              userId={currentUserId}
              updateUser={updateUser}
              setShowForm={setShowForm}
            />
          ) : (
            <AddUserForm addUser={addUser} setShowForm={setShowForm} />
          )
        )}
      </div>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default App;
