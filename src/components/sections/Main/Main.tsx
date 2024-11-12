import { Button, ButtonContainer } from '../../Buttons/Button'
import { MainBg, MainDiv, Name, MainTitle, MainSubTitle } from './MainElements'

interface MainProps {
    name: string
    title1: string
    title2: string
    subtitle: string
    button1: string
    button2: string
}

const Main: React.FC<MainProps> = ({
    name,
    title1,
    title2,
    subtitle,
    button1,
    button2,
}) => {
    return (
        <MainBg>
            <MainDiv>
                <Name>{name}</Name>
                <MainTitle position="first">{title1}</MainTitle>
                <MainTitle position="second">{title2}</MainTitle>
                <MainSubTitle>{subtitle}</MainSubTitle>
                <ButtonContainer>
                    <Button variant="primary">{button1}</Button>
                    <Button variant="secondary">{button2}</Button>
                </ButtonContainer>
            </MainDiv>
        </MainBg>
    )
}
export default Main
