import styled from "styled-components";

const Icon = ({ name, onClick }) => {
  return (
    <StyledIcon>
      <i className={name} onClick={onClick}></i>
    </StyledIcon>
  );
};

const StyledIcon = styled.div`
  font-size: 1.2rem;
  opacity: 0.7;
  cursor: pointer;
`;
export default Icon;
