import styled from "styled-components";

export const lightTheme = {
  corFundo: "honeydew",
  corTexto: "maroon",
  corTitulo: "red",
};

export const darkTheme = {
  corFundo: "#2a0a0a",
  corTexto: "white",
  corTitulo: "#fffdd0",
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
`;

export const TitlePage = styled.h1`
  color: ${(props) => props.theme.corTitulo};
  font-size: 20px;
`;