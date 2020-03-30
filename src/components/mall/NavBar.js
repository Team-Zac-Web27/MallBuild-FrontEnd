import React from "react";
const NavBar = props => {
  return (
    <div className="nav-bar">
      <h1 className="logo">Idea Mall</h1>
      <ul className="nav-buttons">
          <button>Home</button>
          <button>About Us</button>
          <button>Register</button>
          <button>Sign In</button>
      </ul>
    </div>
  );
};
export default NavBar;
