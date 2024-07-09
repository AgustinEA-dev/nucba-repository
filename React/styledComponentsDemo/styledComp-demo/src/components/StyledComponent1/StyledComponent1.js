import styled from "styled-components"

export const ContainerStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 400px;
background-color: black;
`

export const H1Styled = styled.h1`

font-size: 80px;
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
 @media(max-width: 580px){
    font-size: 50px;
    } 
 @media(max-width: 345px){
    font-size: 20px;
    } 
    
background-color: #f3ec78;
background-image: linear-gradient(45deg, #f3ec78, #af4261);
background-size: 100%;
-webkit-background-clip: text;
-moz-background-clip: text;
-webkit-text-fill-color: transparent; 
-moz-text-fill-color: transparent;
`