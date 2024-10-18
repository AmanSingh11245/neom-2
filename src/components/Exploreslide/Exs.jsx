import './Esx.css'
import { EventDetail } from '../../MockData'
import Sx from '../Xslide/Sx'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';

const Exs = () => {
    const swiperRef = useRef(null); // Reference to control the Swiper
  
    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.swiper.slidePrev(); // Accessing the swiper instance
    };
    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.swiper.slideNext(); // Accessing the swiper instance
    };
  
    return (
      <div className="ex-swiper-container">
        <Swiper
          ref={swiperRef}
          slidesPerView={1.3}
          spaceBetween={30}
          className="ex-mySwiper"
        >
          {EventDetail.slice(0,5).map((event, index) => (
            <SwiperSlide key={index}>
              <Sx event={event} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="carousel-controls">
          <button className="carousel-button prev-button" onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="rgb(178, 178, 178)"
            >
              <path d="M10.5 250.2l-6 5.8 6 5.8 184 176 5.8 5.5 11.1-11.6-5.8-5.5L35.9 264 440 264l8 0 0-16-8 0L35.9 248 205.5 85.8l5.8-5.5L200.3 68.7l-5.8 5.5-184 176z" />
            </svg>
          </button>{" "}
          <button className="carousel-button next-button" onClick={handleNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="rgb(178, 178, 178)"
            >
              <path d="M445.5 261.8c1.6-1.5 2.5-3.6 2.5-5.8s-.9-4.3-2.5-5.8l-192-184c-3.2-3.1-8.3-2.9-11.3 .2s-2.9 8.3 .2 11.3L420.1 248 8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l412.1 0L242.5 434.2c-3.2 3.1-3.3 8.1-.2 11.3s8.1 3.3 11.3 .2l192-184z" />
            </svg>
          </button>
        </div>
      </div>
    );
  };
  
  export default Exs;
  