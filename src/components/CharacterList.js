import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

import characters from "../data/characters";
// console.log("The characters are...", characters);


const AllCharactersContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export default function CharacterList({searchQuery, setSearchQuery}) {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState(characters.results);
  const [filteredCharacterData, setFilteredCharacterData] = useState(characterData);

  useEffect(() => {

    setFilteredCharacterData(characterData.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase())))
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  }, [searchQuery]);

  let resultsText = "Showing All Characters"

  if (searchQuery !== "")
    { resultsText += ` Matching "${searchQuery}"`}

  return (
    <section className="character-list">
      <h2>{resultsText}</h2>

      <AllCharactersContainer>

        {filteredCharacterData.map(character => <CharacterCard characterData={character} />)}

      </AllCharactersContainer>
    </section>
  );
}
