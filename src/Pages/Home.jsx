import React from 'react';
import styled from "styled-components";
import CovidImage from "../assets/img/covid-image.png";
import { Container, TitlePage } from '../styles/style';


function Home() {
  const Section = styled.section`
    display: inline-block;
  `;

  const ImageContainer = styled.div`
    width: 25%;
    transform: translate(76%, 90%);   
  `;

  const StyledImage = styled.img`
    max-width: 100%;
  `;

  return (
    <Container>
      <main>
        <TitlePage>Pandemia</TitlePage>
        <Section>
          <ImageContainer>
            <StyledImage src={CovidImage} className="covidImage__image" alt="Corona Virus" />
          </ImageContainer>
        </Section>
      </main>
    </Container>
  );
}

export default Home;