export default function SliderButton(props) {
  return (
    <button
      onClick={props.clickHandler}
      className={`slider-btn ${props.direction}`}
    >
      <img src={`images/icons/${props.direction}-arrow.svg`} alt='arrow' />
    </button>
  );
}
