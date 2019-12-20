import React, { useState } from "react";
import {Link} from "react-router-dom"

import styled from "styled-components";

const StyledForm = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

`;

const SearchInstructions = styled.h3`

  font-size: 1rem;

`;

const SearchInput = styled.input`

  font-size: 1rem;

  line-height: 2rem;
  padding: 0 0.5rem;

  width: 50%

`;

const SubmitButton = styled.button`

  font-size: 1rem;

  line-height: 2rem;
  padding: 0 0.5rem;

`;

// End styling

export default function SearchForm({searchQuery, setSearchQuery}) {
 
  const updateSearchQuery = function (event) {
    setSearchQuery(event.target.value);
  
    console.log(updateSearchQuery);
    
  }
  
  const handleSubmit = function (event) {
  
    event.preventDefault();
  
  }
  

  return (
    <section className="search-form">
     
      <StyledForm name="search" onSubmit={handleSubmit}>

        <SearchInstructions>Start typing to search for a character...</SearchInstructions>

        <SearchInput type="text" name="searchInput" value={searchQuery} onChange={updateSearchQuery}/>

        <SubmitButton type="submit">Search!</SubmitButton>

        <Link to="characters">View All Characters</Link>

      </StyledForm>

    </section>
  );
}
