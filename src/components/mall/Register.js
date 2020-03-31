import React from "react"
import { Card, CardHeader, TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik"
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
    root: {
        fontSize: "2rem"
    },
    Card: {
        width: "40%",
        margin: "0 auto",
        textAlign: "center",
        padding: "3%"
    }
})

const Register = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.Card}>
                <CardHeader title="Register" />

                <Formik initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }}
                    validateSchema={validateSignup}
                    onsubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2))
                            setSubmitting(false)
                        }, 400)
                    }}
                > {({ errors, touched, isSubmitting }) => (

                        <React.Fragment>
                    <Grid container spacing={2}>
                        <form>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="first name"
                                    name="firstName"
                                    type="text"
                                    variant="outlined"
                                />
                                {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="Last name"
                                    name="lastName"
                                    type="text"
                                    variant="outlined"
                                />
                                {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>
                                ) : null}
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="email"
                                    name="email"
                                    type="text"
                                    variant="outlined"
                                />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label="password"
                                    name="password"
                                    type="text"
                                    variant="outlined"
                                />
                                {errors.password && touched.password ? (
                                    <div>{errors.password}</div>
                                ) : null}
                            </Grid>

                            <Button variant="contained" type="submit" disabled={isSubmitting}> Register</Button>

                        </form>


                    </Grid>
                    </React.Fragment>
                )}
                </Formik>
            </Card>
        </div>
    )
}
export default Register