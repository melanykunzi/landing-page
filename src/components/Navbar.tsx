import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './ButtonOne';

interface BurgerProps {
  isOpen: boolean;
}
interface NavListProps {
    isOpen: boolean;
}
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 100%;
`;

const Toggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Burger = styled.div<BurgerProps>`
  width: 25px;
  height: 3px;
  background-color: ${props => (props.isOpen ? 'black' : 'black')};
  transform-origin: 1px;
  transition: all 0.3s linear;

  &:first-child {
    transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  &:nth-child(2) {
    opacity: ${props => (props.isOpen ? '0' : '1')};
    transform: ${props => (props.isOpen ? 'translateX(20px)' : 'translateX(0)')};
  }

  &:nth-child(3) {
    transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
  }
`;

const NavList = styled.ul<NavListProps>`
  display: flex;
  flex: 2;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    background-color: #ffffff;
    top: 70px;
    left: ${props => (props.isOpen ? '0' : '-100%')};
    width: 100%;
    align-items: center;
    text-align: center;
    transition: left 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  padding: 1rem;
`;

const NavLink = styled.a`
  color: #4F5665;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;
const Signbutton = styled.p`
    font-size: 16px;
    cursor: pointer;
    color: #0B132A;
    font-weight: bold;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 20px;
    }

`
const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const Logo = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    cursor:pointer;
    flex: 1;
`
const LogoImg = styled.img`
    width: 50px;
    margin-right: 10px;
`
const LogoText = styled.p`
    font-size: 20px;
    color: #0B132A;
`
const Logobold = styled.span`
    font-weight: bold;
    color: #0B132A;
`
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
        <Logo>
            <LogoImg src="./img/logo.png" alt="" /> 
            <LogoText>Lasles<Logobold>VPN</Logobold></LogoText>
        </Logo>
        <Toggle onClick={toggleNavbar}>
            <Burger isOpen={isOpen} />
        </Toggle>
        <NavList isOpen={isOpen}>
            <NavItems>
                <NavItem>
                    <NavLink href="#">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Features</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Pricing</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Testimonials</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Help</NavLink>
                </NavItem>
            </NavItems>
            <Buttons>
                <Signbutton>Sign In</Signbutton>
                <Button text='Sign Up'></Button>
            </Buttons>
      </NavList>
    </Nav>
  );
};

export default Navbar;
