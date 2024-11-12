export interface ThemeProps {
    mode: string;
    colors: {background: string,
        text: string,
        primary: string,
        secondary: string}
    
}
  
export const darkTheme: ThemeProps = {
    mode: 'dark',
    colors: { background: 'var(--dark-background)',
        text: 'var(--dark-text)',
        primary: 'var(--dark-primary)',
        secondary: 'var(--dark-secondary)',}
   
};
  
export const lightTheme: ThemeProps = {
    mode: 'light',
    colors: { background: 'var(--light-background)',
        text: 'var(--light-text)',
        primary: 'var(--light-primary)',
        secondary: 'var(--light-secondary)',}
   
};
