import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  register,
  clearError,
  clearSuccess,
} from "../redux/userSlices/authSlice";

import Loader from "../components/Loader";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const authUser = useSelector((state) => state.authUser);
  const { loading, error, success, user } = authUser;

  useEffect(() => {
    if (user) {
      history.push("/login");
    }
    if (error) {
      toast(error);
      dispatch(clearError());
    }
    if (success) {
      toast("User Registered Successfully.");
      dispatch(clearSuccess());
    }
  }, [dispatch, error, history, success, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast("Invalid email and Password");
    }
    dispatch(register({ fullname, email, password, cpassword }));
  };

  return (
    <section className="section">
      {loading && <Loader />}
      <div className="grid grid-col-3">
        <div></div>
        <form className="forms mt-2" onSubmit={submitHandler}>
          <h2 className="secondary-heading mb-2 text-center">Register</h2>
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
          <button className="btn btn-primary">Register</button>
          <p className="secondary-description">
            <Link to="/login">have an account? Sign In</Link>
          </p>
        </form>
        <div></div>
      </div>
    </section>
  );
};

export default RegisterPage;
