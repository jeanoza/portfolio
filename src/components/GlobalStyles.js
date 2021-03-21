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
        font-weight:600;
        color:rgb(20,20,20,0.7);
    }
    input,textarea {
        border:none;
  background-color: rgb(250, 250, 250);
        :focus{
            outline:none;
        }
    }

`;

export default GlobalStyles;
