import React from 'react'
import MallCard1 from './MallCard1';
import MallCard2 from './MallCard2';
import MallCard3 from './MallCard3';
import MallCard4 from './MallCard4';


const Dashboard = props => {

    return(
        <div>
        <p>Dashboard</p>
        <MallCard1 name="juana"/>
        <MallCard2 name="mandi"/>
        <MallCard3 name="zach"/>
        <MallCard4 name="david"/>
        </div>
    )
}

export default Dashboard