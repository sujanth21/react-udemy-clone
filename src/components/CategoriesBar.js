import styled from "styled-components";

const CategoriesBar = () => {
  const categories = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Health & Fitness",
    "Music",
  ];
  return (
    <StyledCategoryBar>
      <div className='categories'>
        {categories.map((category) => {
          return <a href='#'>{category}</a>;
        })}
      </div>
    </StyledCategoryBar>
  );
};

const StyledCategoryBar = styled.div`
  width: 100%;
  min-height: 5vh;
  background-color: #fbfbf8;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  a {
    padding: 0;
    padding-right: 2rem;
    color: #666;
    cursor: pointer;
    font-size: 0.8rem;

    &:hover {
      color: #0f7c90;
    }
  }

  @media (max-width: 1150px) {
    min-height: 8vh;
    text-align: center;

    .categories {
      a {
        font-size: 0.7rem;
        padding-right: 1rem;
      }
    }
  }
`;

export default CategoriesBar;
