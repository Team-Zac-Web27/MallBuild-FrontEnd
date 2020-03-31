import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
    root:{

    },
    links:{
        textDecoration:"none",
        color:"black",
        fontSize:"2rem"
    }
})
const NavBar = props => {
    const classes = useStyles()
  return (
    <div className="nav-bar">
      <h1 className="logo">Idea Mall</h1>
      <ul className="nav-buttons">
          <button><Link to="/" className={classes.links}>Home</Link></button>
          <button><Link to="/about" className={classes.links}>About us</Link></button>
          <button><Link to="/register" className={classes.links}>Register</Link></button>
          <button><Link to="/login" className={classes.links}>Login</Link></button>
      </ul>
    </div>
  );
};
export default NavBar;
