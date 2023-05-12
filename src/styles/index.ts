import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        font-family: "Pretendard";
        line-height: 100%;
        
        box-sizing: border-box;
    }

    html, body {
        max-width: 100%;
        max-height: 100%;

        overflow: hidden;
    }

    img {
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        user-select: none;
    }

    button, input {
        background-color: transparent;

        border: none;
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.title};
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.subTitle};
    }

    button, input, p {
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.description};
    }
`;

export default GlobalStyle;
