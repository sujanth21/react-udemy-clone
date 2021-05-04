import styled from "styled-components";
import { Container, Link, BtnOutline } from "../styles";

import udemyLogo from "../img/purple-intersect.svg";

const BusinessBar = () => {
  return (
    <Container>
      <StyledBusinessBar>
        <div className='content-left'>
          <h5>Training 5 or more people?</h5>
          <p>Get your team access to Udemy's top 5,500+ courses</p>
        </div>
        <div className='content-right'>
          <Link>Get Udemy for Business</Link>
          <BtnOutline borderValue='1px solid #fff'>Dismiss</BtnOutline>
        </div>
      </StyledBusinessBar>
    </Container>
  );
};

const StyledBusinessBar = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 3rem;
  min-height: 10vh;
  background: url(${udemyLogo}) repeat-x bottom;
  background-color: #01313a;
  background-size: 8rem;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;

  .content-left {
    display: flex;
    align-items: center;
    color: #fff;

    p {
      padding-left: 0.5rem;
    }
  }

  .content-right {
    display: flex;

    a {
      margin-left: 0.8rem;
      padding: 0.7rem 1.5rem;
      cursor: pointer;
      color: #fff;
    }
  }
`;

export default BusinessBar;
