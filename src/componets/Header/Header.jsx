import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { NavLink, Navbar } from '../../styles/style';

function Header() {
    const NavList = styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const NavItem = styled.li` 
        width: 70%;
        height: 3vw;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;

    const [showHeader, setShowHeader] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && !showHeader) { 
                setShowHeader(true);
            } else if (window.scrollY <= 50 && showHeader) {
                setShowHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showHeader]);

    return (
        <Navbar style={{ top: showHeader ? 0 : '-100%' }}>
            <NavList>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/pandemic">Pandemia</NavLink>
                    <NavLink href="/about">Sobre</NavLink>
                    <NavLink href="/contact">Contato</NavLink>
                </NavItem>
            </NavList>
        </Navbar>
    );
}

export default Header;