import React, { useState } from "react";

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

  font-size: 2rem;

  line-height: 4rem;
  padding: 0 1rem;

`;

const SubmitButton = styled.button`

  font-size: 2rem;

  line-height: 4rem;
  padding: 0 1rem;

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

      </StyledForm>

    </section>
  );
}
