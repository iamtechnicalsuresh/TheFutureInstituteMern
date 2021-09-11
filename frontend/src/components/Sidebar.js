import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="side-nav-main">
      <Link to="/admin/dashboard" className="side-nav-item">
        Dashboard
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        Courses
      </Link>
      <Link to="/admin/useractionpage" className="side-nav-item">
        Users
      </Link>
      <Link to="/admin/contactactionpage" className="side-nav-item">
        Contact Us
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        Reports
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        Comments
      </Link>
    </nav>
  );
};

export default Sidebar;
