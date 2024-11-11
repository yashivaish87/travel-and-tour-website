import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg1 from '../assets/images/hero-img02.jpg'
import heroImg2 from '../assets/images/hero-img03.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import Newsletter from '../shared/Newsletter'

function Home() {
  return (
    <>
      
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating<span className="highlight"> memories</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur itaque minus, asperiores corporis voluptate quidem, eveniet odit sapiente deserunt quaerat nobis! Ipsa explicabo ab ipsam nam mollitia quod recusandae reiciendis!</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-4">
                <img src={heroImg1} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg2} alt="" />
              </div>
            </Col>
          </Row>

          <SearchBar/>
        </Container>
      </section>

      {/* home section */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <br/>
              <h5 className="services_subtitle">What we serve</h5>
              <br/>
              <h2 className="services_title"> We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured section */}
      <section className='featured-section'>
        <Container>
          <Row>
            <Col lg='12' className='mb-4'>
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured_tour-title">Our featured tours...</h2>
            </Col>
            <Col lg='12' className='featured_carousel'>
              <FeaturedTourList />
              </Col>
          </Row>
        </Container>
      </section>

      {/* Experience section */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                <Subtitle subtitle={'Experience'}></Subtitle>
                <h2>With our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                  Cumque excepturi, sint aut nesciunt veniam quae ipsam ducimus rem sapiente quasi facilis voluptatibus cum officia saepe accusantium ea, veritatis aliquam. Illo!</p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className='gallery'>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery_title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12' className='masonry_gallery'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>  
      </section>

      {/* Testimonial Section  */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className='testimonial_title'> What our fans say about us..</h2>
            </Col>
            <Col lg='12'>
            <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
    </>
  )
}

export default Home