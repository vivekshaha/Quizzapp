import styled, { createGlobalStyle } from "styled-components";
import BGI from "./assets/unsplash.jpg";
export const GlobalStyle = createGlobalStyle`html{height: 100%} body{}
body{
    background-image: url(${BGI});
    background-size: cover: 
    margin: 0;
    padding: 0 20;
    display: flex;
    justify-content: center;

}
*{
    box-sizing: border-box;
    font-family: 'Catamaram'
}`;
