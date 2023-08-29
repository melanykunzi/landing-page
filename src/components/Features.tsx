import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 100px;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 0px;
        margin-bottom: 50px;
    }
`
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`
const Right = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 50px;
    @media (max-width: 768px) {
        text-align: center;
        padding-left: 0px;
    }
`
const Image = styled.img`
    width: 500px;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
    }
`
const Title = styled.p`
    font-size: 35px;
    font-weight: bold;
    line-height: 60px;
    @media (max-width: 768px) {
        margin-bottom: 20px;
    }
`
const Texto = styled.p`
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
`
const Linea = styled.div`
    height: 30px;
    display: flex; 
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        text-align: center;
        padding-left: 20%;
        margin-top: 20px;
    }
`
const Check = styled.img`
    width: 27px;
    margin-right: 15px;
`
function Features() {
  return (
        <Container>
            <Left>
                <Image src="./img/imagen2.png"></Image>
            </Left>
            <Right>
                <Title>We Provide Many <br/> Features You Can Use</Title>
                <Texto>You can explore the features that we provide with fun and <br/> have their own functions each feature.</Texto>
                <Linea><Check src="./img/check.png"></Check><Texto>Powerfull online protection.</Texto></Linea>
                <Linea><Check src="./img/check.png"></Check><Texto>Internet without borders.</Texto></Linea>
                <Linea><Check src="./img/check.png"></Check><Texto>Supercharged VPN.</Texto></Linea>
                <Linea><Check src="./img/check.png"></Check><Texto>No specific time limits.</Texto></Linea>
            </Right>
        </Container>
  )
}

export default Features