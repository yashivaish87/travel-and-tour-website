import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import { ResponsiveMasonry } from 'react-responsive-masonry'



const Testimonials = () => {

    const settings = {
        dots: true,
        infinitte: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    infinitte: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1,
                    }   
                }
        ]
    }
  return (
      <Slider {...settings}>
          <div className="testimonial py-4 px-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas blanditiis earum consequuntur officia eos id. Molestias maiores est quas laboriosam. Quasi accusamus et error deleniti praesentium cumque omnis beatae laborum!</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                  <h6 className="mb-0 mt-3">John Doe</h6>
              </div>
          </div>
          <div className="testimonial py-4 px-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas blanditiis earum consequuntur officia eos id. Molestias maiores est quas laboriosam. Quasi accusamus et error deleniti praesentium cumque omnis beatae laborum!</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                  <h6 className="mb-0 mt-3">Lia Franklin</h6>
              </div>
          </div>
          <div className="testimonial py-4 px-3">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas blanditiis earum consequuntur officia eos id. Molestias maiores est quas laboriosam. Quasi accusamus et error deleniti praesentium cumque omnis beatae laborum!</p>
              <div className="d-flex align-items-center gap-4 mt-3">
                  <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                  <h6 className="mb-0 mt-3">John Doe</h6>
              </div>
          </div>
    </Slider>
  )
}

export default Testimonials