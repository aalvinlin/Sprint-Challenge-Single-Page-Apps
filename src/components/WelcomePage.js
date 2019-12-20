import React from "react";

import styled from "styled-components";

const HeaderCentered = styled.header`

  text-align: center;

`;


const ImgCentered = styled.img`

`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeaderCentered>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgCentered
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderCentered>
    </section>
  );
}
