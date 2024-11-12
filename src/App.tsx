import OnePage from './pages/OnePage'
import { ThemeProvider } from 'styled-components'
import TogglerButton from './components/TogglerButton'
import GlobalStyle from './styles/global'
import ThemeContext from './contexts/ThemeContext'
import { lightTheme, darkTheme } from './styles/theme'
import useThemeMode from './hooks/useThemeMode'

export default function App() {
    const { theme, themeToggler } = useThemeMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme

    return (
        <ThemeContext>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle />
                <TogglerButton themeToggler={themeToggler} />
                <OnePage />
            </ThemeProvider>
        </ThemeContext>
    )
}
