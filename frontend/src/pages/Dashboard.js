import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const history = useHistory();
  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  if (user && user.role !== "admin") {
    history.push("/");
  }

  return (
    <div className="grid grid-col-sidebar">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="container">
          <h1 className="primary-heading mb-1">Dashboard</h1>
          <div className="grid grid-col-4">
            <div className="card">
              <div className="card__details text-center">
                <p className="secondary-description">Courses</p>
                <h2 className="secondary-heading">10</h2>
              </div>
            </div>
            <div className="card">
              <div className="card__details text-center">
                <p className="secondary-description">User</p>
                <h2 className="secondary-heading">10</h2>
              </div>
            </div>
            <div className="card">
              <div className="card__details text-center">
                <p className="secondary-description">Contact Us</p>
                <h2 className="secondary-heading">10</h2>
              </div>
            </div>
            <div className="card">
              <div className="card__details text-center">
                <p className="secondary-description">Courses</p>
                <h2 className="secondary-heading">10</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
