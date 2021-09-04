import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="main-nav">
      <a href="/" className="logo">
        <h1>LOGO</h1>
      </a>

      <ul className={navToggler ? "nav-items nav-active" : "nav-items"}>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/courses"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
            exact
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-icons">
        <div className="accounts">
          <i
            className="fas fa-user"
            onClick={() => setOpenAccount(!openAccount)}
          ></i>
          <div className={openAccount ? "account" : "account account-hidden"}>
            <Link to="/login">
              <span>
                <i className="fas fa-sign-in-alt"></i>
              </span>
              Login
            </Link>
            <Link to="/register">
              <span>
                <i className="fas fa-edit"></i>
              </span>
              Register
            </Link>
          </div>
        </div>
        <div className="search" onClick={() => setOpenSearch(!openSearch)}>
          <i className="fas fa-search"></i>
          <div
            className={
              openSearch ? "search-bar" : "search-bar search-bar-hidden"
            }
          >
            <form action="" className="search-bar__form">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <button className="search-button" aria-label="search-course">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="nav-toggler" onClick={() => setNavToggler(!navToggler)}>
        <i className={navToggler ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
