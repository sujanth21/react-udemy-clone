import styled from "styled-components";

import ContentBar from "./ContentBar";
import LyftImg from "../img/lyft-logo.svg";
import adidasImg from "../img/adidas-logo.svg";
import eventbriteImg from "../img/eventbrite-logo.svg";
import surveyMonkeyImg from "../img/surveymonkey-logo.svg";
import bookingImg from "../img/booking-logo.svg";

const BrandsBar = () => {
  return (
    <StyledBrandsBar>
      <ContentBar>
        <div className='left-content'>
          <h4>
            Top companies choose <a href='#'>Udemy for Business </a>
            to build in-demand career skills.
          </h4>
        </div>
        <div className='right-content'>
          <img src={LyftImg} alt='Lyft' className='brands-img' />
          <img src={adidasImg} alt='Adidas' className='brands-img' />
          <img src={eventbriteImg} alt='Event Brite' className='brands-img' />
          <img
            src={surveyMonkeyImg}
            alt='Survey Monkey'
            className='brands-img'
          />
          <img src={bookingImg} alt='Booking.com' className='brands-img' />
        </div>
      </ContentBar>
    </StyledBrandsBar>
  );
};

const StyledBrandsBar = styled.div`
  border-bottom: 1px solid #ddd;
  h4 {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
    color: #3b3c37;
  }

  a {
    text-decoration: none;
    color: #0f7c90;
    font-size: 1.2rem;

    &:hover {
      color: #004450;
    }
  }

  .brands-img {
    margin-right: 1.2rem;
    height: 1.4rem;
  }

  .brands-img:last-child {
    margin-right: 0;
  }

  @media (max-width: 1300px) {
    padding-top: 1rem;
    h4 {
      font-size: 1.1rem;
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    .right-content {
      display: flex;
      flex-direction: column;

      .brands-img {
        height: 2rem;
        margin: 1rem 0;
      }
    }
  }
`;

export default BrandsBar;
