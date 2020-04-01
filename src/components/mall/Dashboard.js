import React from 'react'
import { makeStyles } from "@material-ui/core"
import MallCard1 from './MallCard1';
import MallCard2 from './MallCard2';
import MallCard3 from './MallCard3';
import MallCard4 from './MallCard4';

const useStyles = makeStyles({
cardContainer:{
    display:"flex",
    flexWrap:'wrap',
    justifyContent:"space-evenly"
}
})

const Dashboard = props => {
const classes = useStyles()
    return(
        <div>
        <p style={{textAlign:"center"}}>Dashboard</p>
        <div className={classes.cardContainer}>
        <MallCard1 name="juana"/>
        <MallCard2 name="mandi"/>
        <MallCard3 name="zach"/>
        <MallCard4 name="david"/>
        </div>
        </div>
    )
}

export default Dashboard