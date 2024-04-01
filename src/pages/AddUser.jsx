import React, { useState } from "react";
import { addUser } from "../redux/apiHelper";
import { useSelector } from "react-redux";
import UserForm from "../hook/UserForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const { editUser } = useSelector((state) => state.auth);
  //   console.log("editUser", editUser);
  const navigate = useNavigate();
  const handleSaveUser = async (formData) => {
    if (editingUser) {
    } else {
      const addedUser = await addUser(formData);
      setUsers((prevUsers) => [...prevUsers, addedUser]);
      console.log("addedUser", addedUser);
      toast.success("user added  successful");
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    navigate("/home");
  };

  return (
    <div className="container">
      <h4 className="mt-5 mb-4">User Management</h4>
      <UserForm
        onSave={handleSaveUser}
        defaultUser={editUser}
        onCancel={handleCancelEdit}
        userToEdit={editingUser}
      />
    </div>
  );
};

export default AddUser;
