import {createGlobalStyle} from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
`;
