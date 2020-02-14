import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Social Media
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              HomePage
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/user">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/media">
              Media
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/support">
              Support
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
