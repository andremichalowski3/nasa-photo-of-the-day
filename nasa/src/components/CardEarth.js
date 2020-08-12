import React from 'react';
//REACTSTRAP IMPORTS
import { Alert } from 'reactstrap';
import { Badge } from 'reactstrap';
//STYLED COMPONENT IMPORT
import styled from 'styled-components';


function CardEarth({ earthPhotoData }) {
  return (
    <div>

      <Alert color="primary">
        This is a Reacstrap "Alert" component!
      </Alert>
      <Badge color="success" pill>Success</Badge>
      <Badge color="danger" pill>Danger</Badge>
      <Badge color="warning" pill>Warning</Badge>

      <TomatoButton>Styled Component Styled Button</TomatoButton>

      <img src={earthPhotoData.hdurl} alt='nasa space'/>
      <h1>{earthPhotoData.title}</h1>
      <h3>Photo by: {earthPhotoData.copyright}</h3>
      <h3>{earthPhotoData.date}</h3>
      <p>{earthPhotoData.explanation}</p>
    </div>
  );
}
export default CardEarth;


// STYLED COMPONENT SETUP
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

