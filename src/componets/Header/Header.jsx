import React, { useState } from 'react';
import styled from "styled-components";

function Header() {
    const Navbar = styled.nav`
        background-color: #fff;
        box-shadow: 0 -7px 46px rgba(0, 0, 0, 0.1)
    `;

    const NavList = styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const NavItem = styled.li` 
        width: 35%;
        height: 3vw;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const NavLink = styled.a`
        text-decoration: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        color: #1d1d1d;
    `;

    return (
        <Navbar>
            <NavList>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/pandemic">Pandemic</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </NavItem>
            </NavList>
        </Navbar>
    );
}

export default Header;