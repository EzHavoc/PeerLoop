import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const SideBar = () => {
  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>PEERLOOPA</h2>
                <h3>
                    <FiberManualRecordIcon/>
                    KANISHK SINGH
                </h3>
            </SideBarInfo>

        </SideBarHeader>
      
    </SideBarContainer>
  );;
}

export default SideBar;
const SideBarContainer= styled.div`
background-color: var(--peerloop-bar) ;
height: 100vh;
flex:0.4;
color:black;
border-top: 0px solid #49274b;
max-width: 250px;
margin-top: 60px;
`;
const SideBarHeader = styled.div``;
const SideBarInfo = styled.div``;

