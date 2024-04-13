import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'NotoSansKR', "맑은 고딕", Malgun Gothic, AppleSDGothicNeo, "돋움", Dotum, sans-serif;
    }

    Link {
        text-decoration: none;
        color: black;
        }
    `;
export default GlobalStyle;