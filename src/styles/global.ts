import { createGlobalStyle } from "styled-components";
import backgroundGradient from '../assets/gradiente-background.svg'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
        background-image: url(${backgroundGradient});
        background-position: top center;
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-dark"]};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`