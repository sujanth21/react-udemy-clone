import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledSearch>
      <i class='fas fa-search'></i>{" "}
      <input type='text' placeholder='Search for anything' />
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  border: 1px solid #989586;
  border-radius: 20rem;
  padding: 0 1rem;
  margin-right: 1rem;

  input {
    width: 95%;
    padding: 0.8rem;
    border: none;
  }

  input:focus {
    outline: none;
  }

  i {
    font-size: 1rem;
    padding-right: 1rem;
    opacity: 0.7;
  }
`;

export default SearchBar;
