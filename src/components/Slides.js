import slides from './../data';
import SliderButton from './SliderButton';
export default function Slides(props) {
  const slideElements = slides.map((el) => {
    return (
      <div
        key={el.id}
        className={
          props.currentSlide === el.id ? 'slide slide--active' : 'slide'
        }
      >
        <img src={`images/slides/${el.id}.jpg`} alt='slide' />
        <h1 className='slide-title'>{el.title}</h1>
      </div>
    );
  });
  return (
    <div className='slides-container'>
      {slideElements}
      <SliderButton clickHandler={props.prevSlide} direction='left' />
      <SliderButton clickHandler={props.nextSlide} direction='right' />
    </div>
  );
}
