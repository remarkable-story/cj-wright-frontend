// this is where the stories are styled on the main page

import React from 'react';
import Story from './Story';
import styled from 'styled-components';




 const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 18rem;
  color: black;
  border-radius: 5px;

`;

const SecondaryHeading = styled.h2`
margin-bottom: 2rem;
margin-left: 320px;
z-index: 10;
text-decoration: none;
color: black;
`;


 const Allstories = ({ stories }) => {
  return (
    <div>
    <SecondaryHeading style={{marginTop: '100px'}}>Your Stories:</SecondaryHeading>

      <CardsContainer>
        {stories.map(story => (
          <Story story={story} key={story.id} />
        ))}
      </CardsContainer>
    </div>
  );
};
 export default Allstories;