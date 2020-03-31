import React from "react"
import {Card, CardActionArea, CardHeader, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Formik from "formik"
import * as Yup from "yup"

const validateSignup = Yup.object().shape({
    firstName: Yup.string()
    .required("This is required"),
    lastName: Yup.string()
    .required("This is required"),
    email: Yup.string()
    .email("Invaild Email")
    .required("This is required"),
    password: Yup.string()
    .min(8, "Too short")
    .max(100, "Too long")
    .required("This is required")
})

const useStyles = makeStyles({
    root:{
        fontSize:"2rem"
    },
    Card:{
        width:"40%",
        margin:"0 auto",
        textAlign:"center",
        padding:"3%"
    }
})

const Register = ()=>{

    const classes = useStyles()

    return(
        <div className={classes.root}>
        <Card className={classes.Card}>
        <CardHeader title="Register"   />
        <Grid container spacing={2}>

        
        <Grid item xs={12} sm={12}>

        
            <TextField
            label="first name"
            name="firstName"
            type="text"
            variant="outlined"
            /> </Grid>

           <Grid item xs={12} sm={12}>
            <TextField
            label="Last name"
            name="lastName"
            type="text"
            variant="outlined"
            /> </Grid>

             <Grid item xs={12} sm={12}>
            <TextField
            label="email"
            name="email"
            type="text"
            variant="outlined"
            /> </Grid>

            <Grid item xs={12} sm={12}>
            <TextField
            label="password"
            name="password"
            type="text"
            variant="outlined"
            /> 
            </Grid>
            <CardActionArea>
                <Button variant="contained" type="submit">Register</Button>
            </CardActionArea>

            </Grid>
        </Card>
        </div>
    )
}
export default Register