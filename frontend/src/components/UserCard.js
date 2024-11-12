import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const UserCard = ({ user, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
    
  };

  return (
    <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4 shadow-sm">
      <div>
        <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">DOB: {user.dob}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <FaEdit size={20} />
        </button>
        <button
          onClick={() => handleDelete(user._id)}
          className="text-red-500 hover:text-red-700 transition"
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
