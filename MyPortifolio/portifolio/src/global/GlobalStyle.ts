import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        transition: all .5s;
    }

    button{
        border: none;
        background-color: transparent;
    }

    body, #root, html {
        width: 100%;
        height: 100%;
    }



`;

export default StyledGlobalStyle