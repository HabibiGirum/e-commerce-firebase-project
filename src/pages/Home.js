import React from 'react'
import Wrapper from '../components/Wrapper'
import { Container } from 'react-bootstrap'
import HomeScreen from '../screens/HomeScreen'
const Home = () => {
  return (
    <Wrapper><main className='py-3'>
    <Container>
      <HomeScreen/>
    </Container>

  </main></Wrapper>
  )
}

export default Home