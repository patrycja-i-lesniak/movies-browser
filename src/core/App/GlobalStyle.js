import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html  {
      box-sizing: border-box;
  }
  *, ::after, ::before {
      box-sizing: inherit;
  }

body {
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.colors.site.background};
}
`;
