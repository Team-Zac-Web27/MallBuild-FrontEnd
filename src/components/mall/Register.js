import React from 'react';
import { Link } from "react-router-dom"
import { Form, withFormik, useField } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, makeStyles, Paper, Typography, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
    
        width: '100%',
     
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        width: '100%',
        marginTop: '50px',
        padding: theme.spacing(2),
        textAlign:"center"
    },
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    field: {
        margin: '5px 0'
    },
    Button:{
        margin: "0 auto"
    },
    Links:{
       
        fontSize:"2rem"
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    }
  }));

const MuiFormikTextField = ({ label, ...props }) => {

    //material-ui with access to formik properties and methods
    const [field, meta] = useField(props);
    return (
        <TextField 
            {...field}
            {...props}
            label={label}
            error={meta.error && meta.touched}
            helperText={ (meta.error && meta.touched) && meta.error }
        />         
    )
}

const Register = (props) => {
    const { isSubmitting, values, setValues } = props;
    const classes = useStyles();//styling
    

    //this will handle the visiblity icon
    const handleClickShowPassword = () => {
        console.log(props);
        setValues({ ...values,  showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <Grid container className={classes.root} >
            <Grid item lg={3} md={4} sm={6} xs={11} p={4}>
            <Paper elevation={3} spacing={2} className={classes.paper}>
                <Typography variant="h3" component="h1">
                    Register
                </Typography>
                <Link to="/" className={classes.Links}>Have an account? Login here!</Link>
                <Form width={500} autoComplete='off' className={classes.fieldsContainer}>
                <MuiFormikTextField className={classes.field} type='text' label='Enter your first name' name='firstName' id='firstName' variant="outlined" />


                <MuiFormikTextField className={classes.field} type='text' label='Enter your last name' name='lastName' id='lastName' variant="outlined"  />


                    <MuiFormikTextField className={classes.field} type='email' label='Enter your Email' name='email' id='email' variant="outlined"  />

                    <MuiFormikTextField 
                        className={classes.field}
                        name='password'
                        id='password'
                        type={values.showPassword ? 'text' : 'password'}
                        label='Password' 
                        variant="outlined" 
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment> )
                        }}     
                    />
                    <MuiFormikTextField 
                        className={classes.field}
                        name='password2'
                        id='password2'
                        type={values.showPassword ? 'text' : 'password'}
                        label='Re-type your password'   
                        variant="outlined" 
                    />
                    <Button disabled={isSubmitting} variant="contained" color="primary" type='submit' className={classes.Button}>Submit</Button>
                </Form>
            </Paper>
            </Grid>
        </Grid>
    )
}

const SignUp = withFormik({
    // Initialize "formik states"
    mapPropsToValues: () => ({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        password2: '',
        showPassword: false
    }),
    // Create yup validation schema
    validationSchema: yup.object().shape({
        firstName: yup.string()
            .required("first name is required"),
            lastName: yup.string()
            .required("last name is required"),
        email: yup.string()
            .email("Ivailded Email")
            .required('Email is required'),
        password: yup.string()
            .min(8, 'Password must have at least 8 characters')
            .required('Password required'),
        password2: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Password confirmation required')
    }),
    
})(Register)

export default SignUp
