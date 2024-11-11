import React , {useRef} from 'react'
import Slider from 'react-slick';
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import './featured-tour-list.css'


const FeaturedTourList = () => {

  const sliderRef = useRef(null);

  const settings = {
    centerMode: true, 
    infinite: true,   
    centerPadding: '0', 
    slidesToShow: 3,  
    speed: 500,      
    autoplay: false,   
    arrows: false,   
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPreviousSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); 
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); 
    }
  };

  return (

    <div className="tour-slider">
      <Slider {...settings} ref={sliderRef}>
        {tourData?.map((tour) => (
          <div key={tour.id} className="tour-card-slider">
            <TourCard tour={tour} featured={true} />
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <div className="slider-navigation">
        <button className="custom-arrow left-arrow" onClick={goToPreviousSlide}>
          <i className="ri-arrow-left-circle-fill"></i>
        </button>
        <button className="custom-arrow right-arrow" onClick={goToNextSlide}>
          <i className="ri-arrow-right-circle-fill"></i>
        </button>
      </div>
    
    </div>
    // <>
    //   {
    //     tourData?.map((tour) => (
    //       <Col lg='3' key={tour.id} className="tour-card-slider">
    //         <TourCard tour={tour} />
    //       </Col>
    //     ))
    // }
    // </>
  )
}

export default FeaturedTourList
