import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  border:none;
  list-style:none;
}

`;

export default GlobalStyle;
