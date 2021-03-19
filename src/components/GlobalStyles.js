import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
        ::-webkit-scrollbar {
            display: none;
        }
    }
    body{
        background-color:rgb(255,255,255);
    }

`;

export default GlobalStyles;
