import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --dark-blue:#15202b;
        --gray:#35363a;
        --white:#fff;
        --green-ligth:#06d6a0;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif; 
        background: var(--dark-blue);
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        list-style: none;
        
    }
    h1{
        color: blue;
    }
` 

export default GlobalStyle 