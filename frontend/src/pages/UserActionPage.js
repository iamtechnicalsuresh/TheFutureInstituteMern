import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  fetchUsers,
  deleteUser,
  clearError,
} from "../redux/userSlices/userSlice";

import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import "../styles/CourseActionPage.css";

const UserActionPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.users);
  const {
    loading,
    error,
    success,
    users: { users },
  } = usersState;

  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  if (user && user.role !== "admin") {
    history.push("/");
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, success]);

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
  };

  const editHandler = (slug) => {
    history.push(`/courseeditpage/${slug}`);
  };

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <div className="table-content">
        <div className="container">
          <h1 className="primary-heading">Users</h1>
          {loading && <Loader />}
          <table className="tables">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Profile Pic</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.fullname}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.role}</td>
                    <td>{user.profileImage}</td>
                    <td>{user.createdAt && user.createdAt.split("T")[0]}</td>
                    <td>
                      <i
                        className="fas fa-edit"
                        onClick={() => editHandler(user._id)}
                      ></i>
                    </td>
                    <td>
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => deleteHandler(user._id)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserActionPage;
