import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Titulo = styled.p`
    font-size: 30px;
    color: #0B132A;
    font-weight: 500;
    text-align: center;
    line-height: 50px;
`
const Text = styled.p`
    font-size: 16px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    color: #4F5665;
    margin-top: 30px;
    margin-bottom: 80px;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`
const Espan = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #4F5665;
`
const Image = styled.img`
    width: 900px;
    max-width: 100%;
`
function Global() {
  return (
    <>
        <Container>
            <Titulo>Huge Global Network<br />of Fast VPN</Titulo>
            <Text>See <Espan>LaslesVPN</Espan> everywhere to make it easier for you when you move<br />locations.</Text>
            <Image src="./img/mapa.png"/>
            <Image src="./img/Sponsored.png"/>
        </Container>
    </>
  )
}

export default Global