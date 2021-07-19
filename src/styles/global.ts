import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: 16px "Poppins", Arial, sans-serif;
        color: #121214;
    }

    input,
    textarea {
        font-family: "Poppins";
    }

    .container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 2.5rem 1rem;
    }

    button,
    .checkmark {
        cursor: pointer;
    }
`;