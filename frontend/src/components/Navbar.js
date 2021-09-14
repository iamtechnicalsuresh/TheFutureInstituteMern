import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useHistory } from "react-router-dom";
import { logout } from "../redux/userSlices/authSlice";
import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [navToggler, setNavToggler] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const authUser = useSelector((state) => state.authUser);
  const { user } = authUser;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <nav className="main-nav nav-fixed">
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
        <div className={user && user ? "accounts accounts-hidden" : "accounts"}>
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
        {user && (
          <div
            className="user-info"
            onClick={() => setOpenProfile(!openProfile)}
          >
            <img
              src={`/images/${user.profileImage}`}
              alt="Profile Pic"
              className="user-info-img"
            />
            <div
              className={
                openProfile
                  ? "user-info-dropdown"
                  : "user-info-dropdown user-info-dropdown-hidden"
              }
            >
              <div className="user-info-dropdown-profile-info">
                <img src={`/images/${user.profileImage}`} alt="" />
                <h2 className="secondary-heading">{user.fullname}</h2>
                <p className="secondary-description">{user.email}</p>
              </div>
              <Link to="/admin/dashboard" className="user-info-dropdown-list">
                Dashboard
              </Link>
              <Link to="/admin/dashboard" className="user-info-dropdown-list">
                Profile
              </Link>
              <p className="user-info-dropdown-list" onClick={logoutHandler}>
                Logout
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="nav-toggler" onClick={() => setNavToggler(!navToggler)}>
        <i className={navToggler ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
