import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { useThemeMode } from '../../hooks/useThemeMode'
import { lightTheme, darkTheme } from '../../styles/theme'

interface ThemeContextProps {
    children: ReactNode
}

const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => {
    const { theme } = useThemeMode()

    const themeMode = theme === 'dark' ? darkTheme : lightTheme

    return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
}

export default ThemeContext
