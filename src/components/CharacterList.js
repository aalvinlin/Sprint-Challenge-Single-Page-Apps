import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

import characters from "../data/characters";
console.log("The characters are...", characters);


const AllCharactersContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>Characters Found</h2>

      <AllCharactersContainer>

        {characters.results.map(character => <CharacterCard characterData={character} />)}

      </AllCharactersContainer>
    </section>
  );
}
