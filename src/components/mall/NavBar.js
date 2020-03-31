import React from "react";
import { Link } from "react-router-dom"
const NavBar = props => {
  return (
    <div className="nav-bar">
      <h1 className="logo">Idea Mall</h1>
      <ul className="nav-buttons">
          <button>Home</button>
          <button>About Us</button>
          <button><Link to="/register">Register</Link></button>
          <button>Sign In</button>
      </ul>
    </div>
  );
};
export default NavBar;
