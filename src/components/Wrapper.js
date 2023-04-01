import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Wrapper = (props) => {
  return (
      <div>
          <Header />
          <div className='container'>
              {props.children}
          </div>
          <Footer />
    </div>
  )
}

export default Wrapper