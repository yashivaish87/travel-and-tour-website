import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
      <section >
          <Container className='newsletter'>
              <Row>
                  <Col lg='6'>
                      <div className="newsletter_content">
                          <h2>Subscribe to get useful traveling information. </h2>
                          <div className="newsletter_input">
                              <input type="email" placeholder='Enter your email' />
                              <button className='btn newsletter_btn'>Subscibe</button>
                          </div>

                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium aspernatur sint eligendi, nam veniam nulla. Iure quis earum quaerat voluptatum illo quasi sit odit sint minus! Omnis, doloremque reiciendis.</p>
                      
                      </div>
                  </Col>
                  <Col lg='6'>
                      <div className="newsletter_img">
                          <img src={maleTourist} alt="" />
                      </div></Col>
              </Row>
          </Container>
    </section>
  )
}

export default Newsletter