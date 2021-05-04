import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
     padding: 0;
     margin: 0;
     box-sizing: border-box;
 }

 body {
    font-family: 'Roboto', sans-serif;
    font-size: 62.5%;
 }

 input, textarea {
    font-family: 'Roboto', sans-serif;
    color: #333;
 }

 h1 {
     font-size: 4.8rem;
 }

 h2 {
     font-size: 3.6rem;
 }

 h3 {
     font-size: 2.4rem;
 }

 h4 {
     font-size: 2rem;
 }

 h5,h6 {
     font-size: 1rem;
     font-weight: bold;
     letter-spacing: 0.05rem;
 }

 p,input, a, li, span {
     font-size: 0.85rem;
 }


`;

export default GlobalStyle;
