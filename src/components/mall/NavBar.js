import React from "react";
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core"


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    links: {
        textDecoration: "none",
        color: "white",
        fontSize: "2rem"
    }
})
const NavBar = props => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        Idea Mall
        </Typography>
                    <Button><Link to="/" className={classes.links}>Home</Link></Button>
                    <Button><Link to="/about" className={classes.links}>About </Link></Button>
                    <Button><Link to="/register" className={classes.links}>Register</Link></Button>
                    <Button><Link to="/login" className={classes.links}>Login</Link></Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default NavBar;
