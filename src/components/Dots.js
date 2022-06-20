import data from './../data';
export default function Dots(props) {
  const dots = data.map((el, i) => (
    <div
      onClick={() => props.clickHandler(el.id)}
      className={props.currentSlide === i + 1 ? 'dot dot--active' : 'dot'}
    ></div>
  ));
  return <div className='dots'>{dots}</div>;
}
