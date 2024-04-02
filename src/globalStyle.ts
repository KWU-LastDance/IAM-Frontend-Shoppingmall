import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    }

    Link {
        text-decoration: none;
        color: black;
        }
    `;
export default GlobalStyle;