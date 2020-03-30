import React from "react";
import styled from 'styled-components';

const MallCardDiv = styled.div`
width: 300px;
height: 400px;
border: 2px solid purple;
`

const MallCard3 = props => {
  return (
    <MallCardDiv>
      <p>{props.name}</p>
    </MallCardDiv>
  );
};
export default MallCard3;