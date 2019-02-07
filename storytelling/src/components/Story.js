// This is how each individual story is styled and displayed when it is passed to Allstories

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleCard = styled.div`
  padding: 7rem;
  background-color: rgba(255, 255, 255, 0.8);
  width: 10rem;
  box-shadow: 2px 2px 1px -5px rgba(0, 0, 0, 0.75);
  height: 15rem;
  margin: 1.5rem;
  border-radius: 100px;
  &:hover {
    color:rgba(255, 255, 255);
    box-shadow: 18px 18px 10px -5px rgba(0, 0, 0, 0.75);
    background-color:white;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
  color: black;
  overflow: hidden;
`;

const StoryBody = styled.div`
  font-family: "Raleway", sans-serif;
  color: black;
  overflow: hidden;
`;

const Story = ({ story: { id, title, description } }) => {
  return (
    <Link to={`/viewstory/${id}`}>
      <SingleCard>
        <CardTitle>{title.substr(0, 30) + "..."} </CardTitle>
        <StoryBody>{description.substr(0, 50) + "   ..."}</StoryBody>
      </SingleCard>
    </Link>
  );
};

export default Story;
