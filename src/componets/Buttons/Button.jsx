import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    float: inline-end;
    margin-right: 7px;
    margin-top: 3px;
    background-color: #212121;
    border-radius: 8px;
    border: 1px solid #3c3c3c;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
`;

const ThemeIcon = styled.div`
  width: 32px;
  height: 32px;
  padding: 4px;
  overflow: hidden;
  position: relative;

  & > :nth-child(1) {
    width: 14px;
    height: 14px;
    border-radius: 24px;
    border: 1px solid #212121;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 204, 0);
    transition: width 0.4s, height 0.4s, border 0.4s, background-color 0.4s;
    z-index: 10;
  }

  &:hover > :nth-child(1) {
    width: 24px;
    height: 24px;
    border: 1px solid rgb(245, 245, 247);
    background-color: rgb(245, 245, 247);
  }

  & > :nth-child(2) {
    width: 24px;
    height: 24px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.4s;
  }

  &:hover > :nth-child(2) {
    transform: translate(-50%, -50%) rotate(-45deg) scale(0.8);
  }

  & > :nth-child(2) > :nth-child(1) {
    display: block;
    width: 2px;
    height: 24px;
    border-radius: 2px;
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(255, 204, 0);
  }

  & > :nth-child(2) > :nth-child(2) {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    position: relative;
    top: -54%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(255, 204, 0);
  }

  & > :nth-child(2) > :nth-child(3) {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    position: relative;
    top: -60%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background-color: rgb(255, 204, 0);
  }

  & > :nth-child(2) > :nth-child(4) {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 2px;
    position: relative;
    top: -70%;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    background-color: rgb(255, 204, 0);
  }

  & > :nth-child(3) {
    width: 20px;
    height: 20px;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    background-color: #212121;
    transition: top 0.4s, left 0.4s;
    transition-delay: 0.2s;
    z-index: 20;
  }

  &:hover > :nth-child(3) {
    top: 35%;
    left: 40%;
  }
`;


function Button() {
  return (
    <ButtonWrapper>
        <ThemeIcon>
            <span></span>
            <span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            <span></span>
        </ThemeIcon> 
    </ButtonWrapper>
  );
}

export default Button;