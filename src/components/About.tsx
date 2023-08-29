import styled from "styled-components"
import Button from "./ButtonTwo"

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-top: 80px;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        align-items: center;
        margin-bottom: 50px;
        margin-top: 20px;
    }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 100px;
    padding-top: 40px;
    @media (max-width: 768px) {
        margin-left: 0px;
        margin-bottom: 50px;
    }
`
const Right = styled.div`
    display: flex;
    flex: 1;
    margin-right: 105px;
    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        margin-right: 0px;
    }
`
const Imagen = styled.img`
    width: 100%;
    max-width: 100%;
`
const Titulo = styled.p`
    font-size: 50px;
    color: #0B132A;
`
const TituloBold = styled.span`
    font-weight: bold;
    color: #0B132A;
`
const Texto = styled.p`
    font-size: 16px;
    color: #4F5665;
    margin-top: 40px;
    margin-bottom: 40px;
    line-height: 30px;
`
const TextoSpan = styled.span`
    font-weight: bold;
`
function About() {
  return (
    <>
        <Container>
            <Left>
                <Titulo>Want anything to be easy with <TituloBold>LaslesVPN.</TituloBold></Titulo>
                <Texto>Provide a network for all your needs with ease and fun using <TextoSpan>LaslesVPN</TextoSpan> discover interesting features from us.</Texto>
                <Button text='Get Started'></Button>
            </Left>
            <Right><Imagen src="./img/primerImagen.png"></Imagen></Right>
        </Container>
    </>
  )
}

export default About