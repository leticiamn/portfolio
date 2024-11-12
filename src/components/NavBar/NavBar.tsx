import React, { useState, useEffect } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import { HiMenu } from 'react-icons/hi'
import {
    MenuIcon,
    Nav,
    NavLogo,
    NavLink,
    CloseIcon,
    NavItems,
} from './NavbarElements'
import { useTheme } from 'styled-components'

interface NavItem {
    id: string
    label: string
}

interface NavBarProps {
    items: NavItem[]
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleItemScroll = (id: string) => {
        setIsOpen(false)
        const element = document.getElementById(id)

        if (element) {
            const offset = 0
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const theme = useTheme()
    const isDarkMode = theme.mode === 'dark'

    return (
        <Nav isScrolled={isScrolled}>
            <MenuIcon>
                <HiMenu
                    onClick={() => setIsOpen(!isOpen)}
                    fontSize="large"
                    color="primary"
                />
            </MenuIcon>

            <CloseIcon>
                <IoCloseCircleOutline
                    onClick={() => setIsOpen(!isOpen)}
                    fontSize="large"
                    color="primary"
                />
            </CloseIcon>

            <NavLogo>
                <img
                    alt=""
                    src={
                        isDarkMode ? 'images/dark-logo.png' : 'images/logo.png'
                    }
                    onClick={scrollToTop}
                />
            </NavLogo>
            <NavItems>
                {items.map((item) => (
                    <NavLink
                        key={item.id}
                        onClick={() => handleItemScroll(item.id)}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </NavItems>
        </Nav>
    )
}

export default NavBar
