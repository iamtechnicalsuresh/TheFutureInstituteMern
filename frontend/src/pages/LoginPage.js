import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { login, clearError, clearSuccess } from "../redux/userSlices/authSlice";

import Loader from "../components/Loader";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authUser = useSelector((state) => state.authUser);
  const { loading, error, success, user } = authUser;

  useEffect(() => {
    if (user) {
      history.push("/");
    }
    if (error) {
      toast(error);
      dispatch(clearError());
    }
    if (success) {
      toast("User Login Successfully.");
      dispatch(clearSuccess());
    }
  }, [dispatch, error, history, success, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <section className="section">
      {loading && <Loader />}
      <div className="container">
        <div className="grid grid-col-3">
          <div></div>
          <form className="forms mt-2" onSubmit={submitHandler}>
            <h2 className="secondary-heading mb-2 text-center">Login</h2>
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
            <button className="btn btn-primary">Login</button>
            <p className="secondary-description">
              <Link to="/register">Don't have an account? Sign Up</Link>
            </p>
          </form>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
