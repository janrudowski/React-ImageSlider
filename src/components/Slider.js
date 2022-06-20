import Slides from './Slides';
import Dots from './Dots';
import React from 'react';
import data from './../data';
export default function Slider() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const lastSlide = data.length;

  function goToSlide(slide) {
    setCurrentSlide(slide);
  }
  function prevSlide() {
    if (currentSlide === 1) {
      goToSlide(lastSlide);
    } else {
      goToSlide(currentSlide - 1);
    }
  }
  function nextSlide() {
    if (currentSlide === lastSlide) {
      goToSlide(1);
    } else {
      goToSlide(currentSlide + 1);
    }
  }

  return (
    <div className='slider'>
      <Slides
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        currentSlide={currentSlide}
      />
      <Dots clickHandler={goToSlide} currentSlide={currentSlide} />
    </div>
  );
}
