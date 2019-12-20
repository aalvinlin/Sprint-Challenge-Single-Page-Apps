import React from "react";

import styled from "styled-components"

const CharacterDiv = styled.div`

  display: flex;
  
  border: 1px solid #999999;
  box-shadow: 2px 2px 2px #999999;

  width: 30%;
  height: 100px;

  margin-bottom: 2rem;

`;

const CharacterImg = styled.img`

  width: 100px;
  height: 100px;
  margin-right: 10px;

`;

const CharacterInfoBox = styled.div`

  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;

`;

const CharacterCategory = styled.p`

  font-size: 0.75rem;
  margin: 0.5rem;
`;

const Category = styled.span`

  font-weight: bold;

`;



// export default function CharacterCard({created, episode, gender, id, image, location, name, origin, species, status}) {
  export default function CharacterCard(props) {

  const {created, episode, gender, id, image, location, name, origin, species, status} = props.characterData;
  const locationName = location.name;


  console.log(name, species, locationName);

  return (
  
  <CharacterDiv>
    <CharacterImg src={image} />
    <CharacterInfoBox>
      <CharacterCategory><Category>Name</Category>: {name}</CharacterCategory>
      <CharacterCategory><Category>Species</Category>: {species}</CharacterCategory>
      <CharacterCategory><Category>Location</Category>: {locationName}</CharacterCategory>
    </CharacterInfoBox>
  </CharacterDiv>

  )
}
