import styled from "styled-components";

const LinkCard = ({ name }) => {
  return (
    <StyledLinkCard>
      <a href='#'>{name}</a>
    </StyledLinkCard>
  );
};

const StyledLinkCard = styled.div`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem 2rem;

  a {
    color: #0f7c90;
    font-weight: bold;

    &:hover {
      color: #004450;
    }
  }
`;

export default LinkCard;
