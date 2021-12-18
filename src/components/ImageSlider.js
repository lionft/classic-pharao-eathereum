import React from 'react';
import Slider from 'react-slick';
import img1 from '../assets/images/slider/13.png';
import img2 from '../assets/images/slider/14.png';
import img3 from '../assets/images/slider/15.png';
import img4 from '../assets/images/slider/16.png';
import img5 from '../assets/images/slider/17.png';
import img6 from '../assets/images/slider/18.png';
import img7 from '../assets/images/slider/19.png';
import img8 from '../assets/images/slider/20.png';
import img9 from '../assets/images/slider/21.png';
import img10 from '../assets/images/slider/22.png';
import img11 from '../assets/images/slider/23.png';
import img12 from '../assets/images/slider/24.png';
import img13 from '../assets/images/slider/25.png';
import img14 from '../assets/images/slider/26.png';
import img15 from '../assets/images/slider/27.png';

const ImageSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='image__slider'>
        <div className='px-5 pb-12 WelcomeClub__inner Main__Margin md:pb-16 lg:px-4 md:pt-16'>
          <Slider {...settings}>
            <div className='mx-2'>
              <img src={img1} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img2} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img3} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img4} alt='' className='max-w-full' />
            </div>
            <div className='mx-2'>
              <img src={img5} alt='' className='max-w-full' />
            </div>
            <div className='mx-2'>
              <img src={img6} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img7} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img8} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img9} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img10} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img11} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img12} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img13} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img14} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={img15} alt='' className='max-w-full' />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
