import styled from 'styled-components'
import Slider from './Carousel'

const Container = styled.div`
    width: 80%;
    margin-bottom: 50px;
    @media (max-width: 768px) {
      width: 100%;
    }
`

function Component() {
  return (
    <Container>
        <Slider/>
    </Container>
  )
}

export default Component