import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        border: "solid 1px purple",
        width: "300px",
        height: "400px",
        fontSize: "3rem",
        textAlign: "center"
    },
    Avatar:{
        backgroundColor: "purple",
        margin: " 2% auto "
    }
})



const MallCard4 = props => {
    const classes = useStyles()

    return (
        <div>
            <Card className={classes.root}>
            <Avatar className={classes.Avatar}>DR</Avatar>
                <CardContent>{props.name}</CardContent>
            </Card>
            </div>

    );
};
export default MallCard4;