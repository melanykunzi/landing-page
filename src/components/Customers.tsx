import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Titulo = styled.p`
    font-size: 30px;
    color: #0B132A;
    font-weight: 500;
    text-align: center;
    line-height: 45px;

`
const Text = styled.p`
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    text-align: center;
    color: #4F5665;
    margin-top: 30px;
    margin-bottom: 100px;
`

function Customers() {

  return (
    <Container>
      <Titulo>Trusted by Thousands of<br />Happy Customer</Titulo>
      <Text>These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</Text>
    </Container>
  )
}

export default Customers