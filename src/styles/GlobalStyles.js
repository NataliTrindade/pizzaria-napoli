import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: "Poppins";
        color: ${theme.colors.secundary};
        font-size: 1rem;
    }

    main {
        max-width: 1992px;
        margin: 0 auto;
    }

    a {
        color: inherit;
        display: inline-block;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;
