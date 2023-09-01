import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {

        --color-brand-1: rgba(69,41,230,1);
        --color-brand-2: rgba(81,38,234,1);
        --color-brand-3: rgba(176,166,240,1);
        --color-brand-4: rgba(237,234,253,1);

        --color-alert-1: rgba(205,43,49,1);
        --color-alert-2: rgba(253,216,216,1);
        --color-alert-3: rgba(255,229,229,1);

        --color-sucess-1: rgba(24,121,78,1);
        --color-sucess-2: rgba(204,235,215,1);
        --color-sucess-3: rgba(221,243,228,1);
        
        --color-grey-0: rgba(11,13,13,1);
        --color-grey-1: rgba(33,37,41,1);
        --color-grey-2: rgba(73,80,87,1);
        --color-grey-3: rgba(134,142,150,1);
        --color-grey-4: rgba(173,181,189,1);
        --color-grey-5: rgba(206,212,218,1);
        --color-grey-6: rgba(222,226,230,1);
        --color-grey-7: rgba(233,236,239,1);
        --color-grey-8: rgba(241,243,245,1);
        --color-grey-9: rgba(248,249,250,1);
        --color-grey-10: rgba(253,253,253,1);
        --color-white-fixed: rgba(255,255,255,1);

        --color-random-1: rgba(227,77,140,1);
        --color-random-2: rgba(192,66,119,1);
        --color-random-3: rgba(125,42,77,1);
        --color-random-4: rgba(112,0,255,1);
        --color-random-5: rgba(98,0,227,1);
        --color-random-6: rgba(54,0,125,1);
        --color-random-7: rgba(52,153,116,1);
        --color-random-8: rgba(42,125,95,1);
        --color-random-9: rgba(21,61,46,1);
        --color-random-10: rgba(97,0,255,1);
        --color-random-11: rgba(87,0,227,1);
        --color-random-12: rgba(48,0,125,1);

        font-size: 60%;
        
    }

    body, h1, h2, h3, p, ul, li {
        margin: 0;
        padding: 0;
    }

    body {
        color: #000000;
        background-color: #FFFFFF;
        font-family: 'Lexend', sans-serif;
    }

    
    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        text-decoration: none;
    }

    h1 {
        font-size: 5.6rem;
        font-weight: 700;
    }

    h2 {
        font-size: 3.6rem;
        font-weight: 600;
    }

    h3 {
        font-size: 3.2rem;
        font-weight: 600;
    }

    h4 {
        font-size: 2.8rem;
        font-weight: 500;
    }

    h5 {
        font-size: 2.4rem;
        font-weight: 500;
    }

    h6 {
        font-size: 2.0rem;
        font-weight: 500;
    }

    button {
        border-radius: 4px;
        cursor: pointer;
    }

`;
