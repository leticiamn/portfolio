import styled from 'styled-components'

export const MainBg = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    background-image: url('images/bg-decoration.png');
    background-repeat: no-repeat;
    background-image: url('images/bg-decoration.png'),
        url('images/bg-decoration-2.png'), url('images/bg-decoration-3.png'),
        url('images/bg-decoration-4.png');

    background-position:
        top 1rem left 1rem,
        bottom 1rem left 1rem,
        top 1rem right 1rem,
        bottom 1rem right 1rem;
    background-size: 25% 40%;

    width: 100%;
    height: 75vh;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`
export const MainDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    margin: auto;
    width: 40vw;
    height: 100%;
    max-height: 75vh;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    container-type: inline-size;
`

export const Name = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    color: var(--dark-text);
    width: 100%;
    padding: 0.2rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: large;
    letter-spacing: 0.1rem;
    border-radius: 0.5rem;
`
interface TitleProps {
    position: 'first' | 'second'
}

export const MainTitle = styled.h1<TitleProps>`
    color: ${({ theme, position }) =>
        position === 'first'
            ? theme.mode === 'dark'
                ? theme.colors.secondary
                : theme.colors.primary
            : theme.colors.text};

    text-transform: uppercase;
    font-size: ${({ position }) =>
        position === 'first' ? '17cqw' : '18.7cqw'};
    line-height: 0rem;
    margin-bottom: 1.5rem;
    font-weight: ${({ position }) => (position === 'first' ? 1000 : 500)};
    text-align: center;
`

export const MainSubTitle = styled.p`
    font-size: 1rem;
    margin: 1.5rem 0;
    text-align: center;
    letter-spacing: 0.04rem;
    font-weight: 500;
`
