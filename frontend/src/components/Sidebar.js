import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="side-nav-main">
      <Link to="/admin/dashboard" className="side-nav-item">
        <i className="fas fa-tachometer-alt"></i> Dashboard
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        <i className="fas fa-school"></i> Courses
      </Link>
      <Link to="/admin/useractionpage" className="side-nav-item">
        <i className="fas fa-users"></i> Users
      </Link>
      <Link to="/admin/contactactionpage" className="side-nav-item">
        <i className="far fa-address-book"></i> Contact Us
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        <i className="fas fa-book"></i> Reports
      </Link>
      <Link to="/admin/courseactionpage" className="side-nav-item">
        <i className="fas fa-comments"></i> Comments
      </Link>
    </nav>
  );
};

export default Sidebar;
