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
        text-align:justify;
    }
    body{
        background-color:rgb(255,255,255);
        font-weight:600;
        color:rgb(20,20,20,0.7);
        overflow-y:scroll;
    }
    #root{
        overflow-y:scroll;
    }
    input,textarea {
        border:none;
        ::placeholder{
            color:rgb(20,20,20,0.2);
        }
  background-color: rgb(250, 250, 250);
        :focus{
            outline:none;
        }
    }

`;

export default GlobalStyles;
