import './App.css'
import About from './components/About'
import styled from 'styled-components'
import Bar from './components/Bar'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Global from './components/Global'
import Customers from './components/Customers'
import Component from './components/Component'
import Forms from './components/Form'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function App() {

  return (
    <>
      <Container>
        <Navbar/>
        <About/>
        <Bar/>
        <Features/>
        <Pricing/>
        <Global/>
        <Customers/>
        <Component/>
        <Forms/>
        <Footer/>
      </Container>
    </>
  )
}

export default App
