import styled from "styled-components/native";

export const ImageContainer = styled.ImageBackground``;

export const Container = styled.View`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
gap:10px;
`;


export const CardContainer = styled.View`
display: flex;
justify-content: center;
align-items: center;
background-color: white;
width: 200px;
height: 100px;
border-radius: 6px;

`;

export const CardTitle = styled.Text`
color: aqua;
font-size: 30px;
`;

export const CardSubtitle = styled.Text`
font-size: 15px;
color: aqua;
`;