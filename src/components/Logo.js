import LogoImg from "../img/udemy-2-logo.png";

import styled from "styled-components";

const Logo = () => {
  return <StyledLogo src={LogoImg} alt='logo' />;
};

const StyledLogo = styled.img`
  width: 9.2rem;
`;

export default Logo;
