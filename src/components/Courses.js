import styled from "styled-components";
import { Container } from "../styles";

import CourseCard from "./CourseCard";

const Courses = ({ heading, link, courses }) => {
  return (
    <Container>
      <StyledCourses>
        <h4>
          {heading}
          <a href='#'>{link}</a>
        </h4>
        <div className='suggested-courses'>
          {courses.map((course) => {
            return (
              <CourseCard
                courseImage={course.courseImage}
                title={course.courseTitle}
                author={course.courseAuthor}
                rating={course.courseRating}
                ratingNum={course.ratingNumbers}
                price={course.coursePrice}
                discount={course.currentPrice}
                tag={course.tag}
                tagColor={course.tagColor}
              />
            );
          })}
        </div>
      </StyledCourses>
    </Container>
  );
};

const StyledCourses = styled.div`
  width: 95%;
  margin: auto;
  overflow: hidden;

  h4 {
    font-size: 1.6rem;
    margin-top: 3rem;
    color: #3c3b37;
  }
  a {
    font-size: 1.6rem;
    color: #0f7c90;

    &:hover {
      color: #004450;
    }
  }

  .suggested-courses {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 1400px) {
    .suggested-courses {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
    }
  }
  @media (max-width: 1100px) {
    .suggested-courses {
      grid-template-columns: repeat(1, 1fr);
      justify-items: start;
    }
  }
`;

export default Courses;
