import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translate(50%, -100%);
  }
  100% { 
    transform: translate(50%, 21%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translate(50%, 21%);
  }
  100% { 
    transform: translate(50%, -100%);
  }
`;

export const lightTheme = {
  corFundo: "#fff",
  corTextNav: "#19deec",
  corTexto: "#262626",
  corTitulo: "#ff0000",
  corTheme: "#000",
  corTituloPand: "red",
  corFundoText: "linear-gradient(to bottom, #e0f1fe, #fff)",
};

export const darkTheme = {
  corFundo: "#212529",
  corTexto: "#dcdcdc",
  corTextNav: "#19deec",
  corTitulo: "#b7b7b7",
  corTheme: "#fff",
  corTituloPand: "#7e0505",
  corFundoText: "linear-gradient(to bottom, #0b60a1, #212529)"
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
  width: 100vw;
  height: 100vh;
`;

export const Button = styled.button`
  position: fixed;
  right: 384px;
  z-index: 99999;
  border-radius: 17px;
  padding: 7px;
  top: 15px;
  border: none;
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTheme};
`;

export const Navbar = styled.nav`
  position: fixed;
  top: -100%;
  background-color: ${(props) => props.theme.corFundo};
  box-shadow: 0 -7px 46px rgba(0, 0, 0, 0.1);
  width: 50%;
  border-radius: 12px;
  transform: translate(50%, 21%);
  transition: top 0.5s ease;
  z-index: 100;
  animation: ${slideIn} 0.5s ease-in-out;
`;

export const TitlePage = styled.h1`
  color: ${(props) => props.theme.corTituloPand};
  background: ${(props) => props.theme.corFundoText};
  margin: 0;
  display: grid;
  place-items: center;
  height: 100vh;
  font-family: Metal Mania;
  font-size: 105px;
  letter-spacing: 48px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: ${(props) => props.theme.corTexto};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: #007bff;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
  }


  &:hover {
    color: ${(props) => props.theme.corTextNav};
    background: ${(props) => props.theme.corFundo};
    opacity: 0.7;
    border-radius: 10px;
    box-shadow: 0 0 20px 0px rgba(0, 174, 255, 0.6);
    &::before {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`;