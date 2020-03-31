import React from "react";
import{ Card, CardHeader, Avatar } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


// const MallCardDiv = styled.div`
// width: 300px;
// height: 400px;
// border: 2px solid purple;
// `
const useStyles = makeStyles({
    root:{
        width:"300px",
        height:"400px",
        border:"solid 1px purple",
        textAlign: "center"
    },
    Avatar:{
        margin: "2% auto",
        backgroundColor:"purple"
    }
})

const MallCard = props => {
    const classes = useStyles()
  return (
    <Card className={classes.root}>
    <Avatar className={classes.Avatar}>DR</Avatar>
        <CardHeader title={props.name} subheader="wineME" />

      
     
    </Card>
    
  );
};
export default MallCard;
