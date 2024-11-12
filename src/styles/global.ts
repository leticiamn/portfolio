import { createGlobalStyle, withTheme } from 'styled-components'
import { ThemeProps } from './theme'

type GlobalThemeProps = {
    theme: ThemeProps
}

const globalStyle = createGlobalStyle`
:root {

    --tertiary: #D283FF;

    //dark-mode
    --dark-background: #310055;
    --dark-background-black: #1A1B27;
    --dark-text: #F5F5F7;
    --dark-primary: #8B2FC9;
    --dark-secondary: #6818A5;

    //light-mode
    --light-background: #FAF9F9;
    --light-text: #2E0509;
    --light-primary: #6818A5;
    --light-secondary: #8B2FC9;

  }
body {
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }: GlobalThemeProps) => theme.colors.background};
    color: ${({ theme }: GlobalThemeProps) => theme.colors.text};
  }
`

export default withTheme(globalStyle)
