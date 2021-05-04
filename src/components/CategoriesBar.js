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
      {categories.map((category) => {
        return <a>{category}</a>;
      })}
    </StyledCategoryBar>
  );
};

const StyledCategoryBar = styled.div`
  width: 100%;
  min-height: 5vh;
  background-color: #fbfbf8;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-right: 2rem;
    color: #666;
    cursor: pointer;
    font-size: 0.8rem;
  }
`;

export default CategoriesBar;
