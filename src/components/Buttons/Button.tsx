import styled from 'styled-components'

interface ButtonProps {
    variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    border: 3px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    height: 2rem;
    margin: 0.1rem;

    transition: all 0.3s ease;

    background-color: ${({ theme, variant }) =>
        variant === 'primary' ? theme.colors.primary : 'transparent'};
    color: ${({ theme, variant }) =>
        variant === 'primary' ? '#fff' : theme.colors.primary};
    border-color: ${({ theme, variant }) =>
        variant === 'primary' ? theme.colors.primary : theme.colors.primary};

    &:hover {
        background-color: ${({ variant }) =>
            variant === 'primary' ? 'var(--tertiary)' : 'transparent'};
        color: ${({ theme, variant }) =>
            variant === 'primary' ? theme.colors.primary : 'var(--tertiary)'};
        border-color: ${({ variant }) =>
            variant === 'primary' ? 'var(--tertiary)' : 'var(--tertiary)'};
    }
`
export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`
