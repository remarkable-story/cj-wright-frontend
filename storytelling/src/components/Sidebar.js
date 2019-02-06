// this is the sidebar it's the same on every page

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: white;
  padding: 1.5rem;
  text-decoration: none;
`;
const MainHeading = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: black;
`;
const SideButton = styled.button`
  width: 100%;
  padding: 1rem 0;
  text-decoration: none;
  text-align: center;
  font-size: inherit;
  font-weight: bold;
  color: white;
  background-color: #FBA423;
  border: none;
  border-radius: 5px;
  display: block;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const styLink = styled.div`
color: #000;

`
const SideBar = () => {
  return (
    <StyledSideBar style={{  backgroundImage: "url(" + "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/QIAQ9Rd/blur-beach-video-animation_vy8c6gu2__F0000.png" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}}>
      <MainHeading style={{marginTop: 150}}>
      <styLink>
        <Link to="/" style={{color:'black',fontFamily:'Raleway'}}>Bountiful </Link>
      </styLink>
      </MainHeading>
      <SideButton>
        <Link to="/" style={{color:'white', backgroundColor: '#FBA423'}}>View Your Stories</Link>
      </SideButton>
      <SideButton>
        <Link to="/createstory" style={{color:'white', backgroundColor: '#FBA423'}}>+Create a New Story</Link>
      </SideButton>
    </StyledSideBar>
  );
};
export default SideBar;
