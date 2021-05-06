import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const Link = styled.a`
  background: #0f7c90;
  padding: 1rem 0.8rem;
  border-radius: 0.3rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    background: #004450;
    color: #fff;
  }
`;

export const BtnOutline = styled.a`
  text-decoration: none;
  color: #666;
  border: ${(props) => props.borderValue || "1px solid #333"};
  padding: 0.2rem 1.5rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
