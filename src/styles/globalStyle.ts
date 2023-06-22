import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        width: max-content;
        
        font-family: "Pretendard";
        font-weight: 400;
        line-height: 150%;
        
        box-sizing: border-box;
    }

    html, body {
        background-color: ${({ theme }) => theme.colors.background1};

        max-width: 100%; 

        overflow-x: hidden;
    }

    img {
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }

    button, input {
        background-color: transparent;

        border: none;
    }

    picture {
        display: flex;
    } 

    h2 {
        font-size: ${(props) => props.theme.fontSizes.subTitle};
    }

    button, input, p {
        font-size: ${(props) => props.theme.fontSizes.text};
    }

    span {
        font-size: ${(props) => props.theme.fontSizes.subText};
    }
`;

export default GlobalStyle;
