import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html  {
      box-sizing: border-box;
  }
  *, ::after, ::before {
      box-sizing: inherit;
  }

body {
    margin: auto;
    max-width: 1920px;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.site.background};
    /* background: #F5F5FA"; */
}
`;
