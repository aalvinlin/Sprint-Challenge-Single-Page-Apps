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




const handleSubmit = function (event) {

  event.preventDefault();

}

export default function SearchForm() {
 
  return (
    <section className="search-form">
     
      <StyledForm name="search" action={handleSubmit}>

        <SearchInstructions>Search for a character or episode...</SearchInstructions>

        <SearchInput type="text"/>

        <SubmitButton type="submit">Search!</SubmitButton>

        <Link to="characters">View All Characters</Link>

      </StyledForm>

    </section>
  );
}
