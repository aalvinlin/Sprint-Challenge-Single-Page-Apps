import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

import characters from "../data/characters";
import axios from "axios";
// console.log("The characters are...", characters);


const AllCharactersContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export default function CharacterList({searchQuery, setSearchQuery}) {

  const [characterData, setCharacterData] = useState([]);
  const [filteredCharacterData, setFilteredCharacterData] = useState([]);

  useEffect(() => {

    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacterData(response.data.results);
      setFilteredCharacterData(response.data.results);

    })
    .catch(error => {
      console.error(error);
    });

  }, []);


  // filter all characters by the search results
  useEffect(() => {

    setFilteredCharacterData(characterData.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase())))
    
  }, [searchQuery]);

  let resultsText = "Showing All Characters"

  if (searchQuery !== "")
    { resultsText += ` Matching "${searchQuery}"`}

  return (
    <section className="character-list">
      <h2>{resultsText}</h2>

      <AllCharactersContainer>

        {filteredCharacterData.map(character => <CharacterCard characterData={character}/>)}

      </AllCharactersContainer>
    </section>
  );
}
