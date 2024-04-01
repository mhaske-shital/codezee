import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectToken,
  selectUsers,
  setEditUser,
  setFormStatus,
} from "../redux/authSlice";
import { listUsers, editUser, deleteUser } from "../redux/apiHelper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../componets/Navbar";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (token) {
          await listUsers();
        }
      } catch (error) {
        console.error("Error fetching user list:", error.message);
      }
    };

    fetchUsers();
  }, [dispatch, token]);

  const handleEditUser = async (user) => {
    try {
      dispatch(setFormStatus("edit"));
      dispatch(setEditUser(user));
      navigate("/add-user");
    } catch (error) {
      console.error("Error editing user:", error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      await listUsers();
      toast.success("User deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Error deleting user:", error.message);
      toast.error("Error deleting user", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="mt-5 mb-4">User List</h4>
        {users.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}`}
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  </td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => handleEditUser(user)}
                      className="btn btn-outline-primary me-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
        <ToastContainer />
      </div>
    </>
  );
};

export default UserList;
