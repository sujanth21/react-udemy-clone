import styled from "styled-components";
import { Container } from "../styles";
import heroImg from "../img/main_hero.jpg";

import ContentCard from "./ContentCard";

const Hero = () => {
  return (
    <Container>
      <StyledHero>
        <div className='hero-content'>
          <ContentCard>
            <h3>
              Learn for your <br /> future
            </h3>
            <p>Start moving toward where you want to be.</p>
            <p>Courses start at A$14.99</p>
          </ContentCard>
        </div>
      </StyledHero>
    </Container>
  );
};

const StyledHero = styled.div`
  min-height: 45vh;
  width: 100%;
  background: url(${heroImg}) no-repeat top center/cover;
  position: relative;

  .hero-content {
    position: absolute;
    top: 3rem;
    left: 5rem;
  }

  h3 {
    color: #3b3c37;
    font-size: 2.6rem;
    font-family: Georgia, "Times New Roman", Times, serif;
    padding-bottom: 1rem;
  }

  p {
    color: #3b3c37;
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 0.2rem;
  }
`;

export default Hero;
