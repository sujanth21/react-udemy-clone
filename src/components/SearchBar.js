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

  @media (max-width: 1650px) {
    width: 95%;
    margin-right: 0;
    input {
      width: 85%;
    }
  }

  @media (max-width: 900px) {
    width: 80%;

    input {
      width: 100%;
      padding: 0.4rem;

      &::placeholder {
        font-size: 0.7rem;
      }
    }

    i {
      display: none;
    }
  }

  @media (max-width: 750px) {
    margin-left: 1rem;
    input {
      width: 100%;
      padding: 0.2rem;

      &::placeholder {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 630px) {
    display: none;
  }
`;

export default SearchBar;
