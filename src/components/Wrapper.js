import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Wrapper = (props) => {
  return (
   
       <main >
        <Container>
          <Header />
          <div className='container'>
              {props.children}
          </div>
          <Footer />
          </Container>
    </main>
  )
}

export default Wrapper