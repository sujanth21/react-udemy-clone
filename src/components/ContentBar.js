import styled from "styled-components";

const ContentBar = ({ children }) => {
  return <StyledContentBar>{children}</StyledContentBar>;
};

const StyledContentBar = styled.div`
  border-top: 1px solid #ddd;
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

export default ContentBar;
