import styled from "styled-components";

const CourseCard = ({
  courseImage,
  title,
  author,
  rating,
  ratingNum,
  price,
  discount,
  tag,
  tagColor,
}) => {
  return (
    <StyledCourseCard tagColor={tagColor}>
      <img src={courseImage} alt='course image' />
      <h5>{title}</h5>
      <p>{author}</p>
      <div className='rating-details'>
        <p>
          {rating}
          <span className='stars'>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star-half-alt'></i>
          </span>
          <span className='ratNum'>({ratingNum})</span>
        </p>
      </div>

      <h5>
        {discount}
        <span>
          <strike>{price}</strike>
        </span>
      </h5>
      {tag ? <div className='tag'>{tag}</div> : ""}
    </StyledCourseCard>
  );
};

const StyledCourseCard = styled.a`
  cursor: pointer;
  color: #3b3c37;
  img {
    border-radius: 3px;

    &:hover {
      opacity: 0.9;
    }
  }

  h5 {
    padding-top: 0.7rem;
    letter-spacing: 0.02rem;
    color: #3b3c37;
  }
  p {
    padding-top: 0.3rem;
    color: #3b3c37;
    font-size: 0.8rem;
  }

  .ratNum {
    color: #3b3c37;
    font-weight: 400;
    padding-left: 1rem;
  }

  .stars {
    padding-left: 0.2rem;
  }

  i {
    color: #eb8a2f;
  }

  .tag {
    display: inline-block;
    border-radius: 3px;
    background: ${(props) => props.tagColor};
    padding: 0.3rem;
    font-size: 0.7rem;
    color: #593d00;
    font-weight: bold;
  }
`;

export default CourseCard;
