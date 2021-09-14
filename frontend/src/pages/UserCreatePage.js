import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  createUsers,
  clearError,
  clearSuccess,
} from "../redux/userSlices/userSlice";

import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";

const UserCreatePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [role, setRole] = useState("");

  const users = useSelector((state) => state.users);
  const { loading, error, success } = users;

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearError());
    }
    if (success) {
      toast("User Registered Successfully.");
      dispatch(clearSuccess());
      history.push("/admin/useractionpage");
    }
  }, [error, success, history, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast("Invalid email and Password");
    }
    dispatch(createUsers({ fullname, email, password, cpassword, role }));
  };

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <section className="section">
        {loading && <Loader />}
        <div className="grid grid-col-3">
          <div></div>
          <form className="forms mt-2" onSubmit={submitHandler}>
            <h2 className="secondary-heading mb-2 text-center">Add New User</h2>
            <div className="form-group">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-input"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-input"
                id="cpassword"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="form-label">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-input"
              >
                <option value="user">User</option>
                <option value="trainer">Trainer</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button className="btn btn-primary">Create User</button>
          </form>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default UserCreatePage;
