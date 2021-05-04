import styled from "styled-components";

const ContentCard = ({ children }) => {
  return <StyledContentCard>{children}</StyledContentCard>;
};

const StyledContentCard = styled.div`
  display: inline-block;
  background: #fff;
  padding: 2.4rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
`;

export default ContentCard;
