import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  height: 500px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;
const Iconos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 300px;
  width: 400px;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`
const Logo = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    cursor:pointer;
    text-align: center;
    @media (max-width: 768px) {
      width: auto;
      margin-top: 20px;
    } 
`
const LogoImg = styled.img`
    width: 30px;
    margin-right: 10px;
`
const LogoText = styled.p`
    font-size: 20px;
    color: #0B132A;
`
const Logobold = styled.span`
    font-weight: bold;
    color: #0B132A;
`
const Texto = styled.p`
  font-size: 16px;
  color: #4F5665;
`
const Sspan = styled.span`
  font-weight: 500;
  font-size: 16px;
`
const Logos = styled.div`
  display: flex;
  flex-direction: row;
`
const Imgs = styled.img`
  height: 70px;
  cursor: pointer;
`
const Marca = styled.p`
  color: #AFB5C0;
`
const Columna = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #4F5665;
`
const ListaColumna = styled.ul`
  list-style-type: none;
  padding: 0;
`
const ElementoLista = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`
const PrimerElemento = styled.li`
  font-weight: 500;
  margin-bottom: 20px;
  cursor: pointer;
`
const CenteredContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 200px;
  padding-right: 200px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
const Columnas = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 20px;
  font-size: 12px;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`
function Footer() {
  return (
    <Container>
      <CenteredContainer>
        <Iconos>
        <Logo>
            <LogoImg src="./img/logo.png" alt="" /> 
            <LogoText>Lasles<Logobold>VPN</Logobold></LogoText>
        </Logo>
        <Texto><Sspan>LaslesVPN</Sspan> is a private virtual network<br />that has unique features and has high security.</Texto>
        <Logos>
          <Imgs src="/img/Facebook.png" alt="" />
          <Imgs src="/img/Twitter.png" alt="" />
          <Imgs src="/img/Instagram.png" alt="" />
        </Logos>
        <Marca>
        ©2020Lasles<Sspan>VPN</Sspan>
        </Marca>
        </Iconos>
        <Columnas>
        <Columna>
          <ListaColumna>
            <PrimerElemento>Product</PrimerElemento>
            <ElementoLista>Download</ElementoLista>
            <ElementoLista>Pricing</ElementoLista>
            <ElementoLista>Locations</ElementoLista>
            <ElementoLista>Server</ElementoLista>
            <ElementoLista>Countries</ElementoLista>
            <ElementoLista>Blog</ElementoLista>
          </ListaColumna>
        </Columna>
        <Columna>
          <ListaColumna>
            <PrimerElemento>Engage</PrimerElemento>
            <ElementoLista>LaslesVPN ?</ElementoLista>
            <ElementoLista>FAQ</ElementoLista>
            <ElementoLista>Tutorials</ElementoLista>
            <ElementoLista>About Us</ElementoLista>
            <ElementoLista>Privacy Policy</ElementoLista>
            <ElementoLista>Terms Of Service</ElementoLista>
          </ListaColumna>
        </Columna>
        <Columna>
          <ListaColumna>
            <PrimerElemento>Earn Money</PrimerElemento>
            <ElementoLista>Affiliate</ElementoLista>
            <ElementoLista>Become Partner</ElementoLista>
          </ListaColumna>
        </Columna>
        </Columnas>
      </CenteredContainer>
    </Container>
  )
}

export default Footer