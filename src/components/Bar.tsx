import styled from "styled-components"

const Container = styled.div`
    width: 900px;
    height: 150px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
      height: 400px;
      flex-direction: column;
      max-width: 230px;
      display: flex;
      text-align: center; 
      margin-top: 50px;
  }
`
const Linea = styled.div`
  height: 100px;
  width: 2px;
  background-color: #EEEFF2;
  @media (max-width: 768px) {
    height: 0px;
    width: 0px;
  }
`
const Box = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  
`
const Image = styled.img`
  width: 80px;
`
const Textos = styled.div`
  display: flex;
  flex-direction: column;
`
const TextBold = styled.p`
  font-weight: bold;
`
function Bar() {
  return (
    <div>
        <Container>
            <Box>
              <Image src="./img/users.png"></Image>
              <Textos>
                <TextBold>90+</TextBold>
                <p>Users</p>
              </Textos>
            </Box>
            <Linea></Linea>
            <Box>
              <Image src="./img/locations.png"></Image>
              <Textos>
                <TextBold>30+</TextBold>
                <p>Locations</p>
              </Textos>
            </Box>
            <Linea></Linea>
            <Box>
              <Image src="./img/servers.png"></Image>
              <Textos>
                <TextBold>50+</TextBold>
                <p>Servers</p>
              </Textos>
            </Box>
        </Container>
    </div>
  )
}

export default Bar