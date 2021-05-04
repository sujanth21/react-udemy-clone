import styled from "styled-components";
import learningImg from "../img/main_hero.jpg";

const CurrentLearningCard = ({
  courseTitle,
  lectureTitle,
  duration,
  thumbnail,
}) => {
  return (
    <StyledCurrentLearningCard>
      <div className='thumb'>
        <img src={thumbnail} alt='learning image' />
        <i class='far fa-play-circle'></i>
      </div>

      <div className='learning-content'>
        <p>{courseTitle}</p>
        <h5>{lectureTitle}</h5>
        <p className='current-lecture-duration'>
          Lecture <i class='fas fa-circle'></i> <span> {duration}</span>
        </p>
      </div>
    </StyledCurrentLearningCard>
  );
};

const StyledCurrentLearningCard = styled.div`
  display: flex;
  border-radius: 0.3rem;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-top: 1rem;

  .thumb {
    position: relative;
    height: 10rem;
    img {
      width: 7.5rem;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
    }

    i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
      color: #888;
    }

    &:hover {
      i {
        color: #0f7c90;
      }
    }
  }

  .learning-content {
    position: relative;
    p {
      padding: 1rem 0.5rem 0.6rem 1rem;
      font-size: 0.75rem;
      font-weight: bold;
      color: #888;
    }

    h5 {
      margin: 0rem 1rem;
      color: #3b3c37;
      letter-spacing: 0.01rem;
      font-size: 1rem;
    }

    .current-lecture-duration {
      position: absolute;
      bottom: 0.2rem;

      i {
        font-size: 0.3rem;
        text-align: center;
      }

      span {
        font-weight: 400;
        font-size: 0.8rem;
      }
    }
  }
`;

export default CurrentLearningCard;
