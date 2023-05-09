import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body, #root{
        background-color: #EFEFEF;
        height: 100%;
    }
`