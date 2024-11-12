import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav<{ isScrolled: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: ${({ theme, isScrolled }) =>
        isScrolled ? `rgba(${theme.background}, 0.7)` : theme.background};
    backdrop-filter: ${({ isScrolled }) =>
        isScrolled ? 'blur(10px)' : 'none'};
    -webkit-backdrop-filter: ${({ isScrolled }) =>
        isScrolled ? 'blur(10px)' : 'none'};
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: ${({ isScrolled }) => (isScrolled ? 'fixed' : 'relative')};
    top: 0;
    height: auto;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s ease;
    z-index: 1000;
    @media only screen and (max-width: 600px) {
        justify-content: flex-start;
        border-radius: 0;
        width: 100%;
        top: 0;
        margin: none;
    }
`
export const NavLogo = styled.div`
    cursor: pointer;
    width: 10.313rem;
    height: 3.938rem;
    object-fit: cover;
    display: flex;
`

export const NavItems = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const NavLink = styled.div`
    font-weight: 800;
    height: 1.219rem;
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: ${({ theme }) => theme.colors.secondary};
    }
`

export const MenuIcon = styled(FaBars)`
    display: none;
    color: ${({ theme }) => theme.text};
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const CloseIcon = styled(FaBars)`
    display: none;
    color: ${({ theme }) => theme.text};
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: transparent;
    padding: 10px 22px;
    color: ${({ theme }) => theme.text};
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }
`
