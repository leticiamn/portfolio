import { useEffect, useState } from 'react'

export const useThemeMode = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('light')

    const setMode = (mode: 'dark' | 'light') => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const themeToggler = () =>
        theme === 'dark' ? setMode('light') : setMode('dark')

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme as 'dark' | 'light')
        } else {
            const prefersDarkMode =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDarkMode ? 'dark' : 'light')
        }
    }, [])

    return { theme, themeToggler }
}

export default useThemeMode
