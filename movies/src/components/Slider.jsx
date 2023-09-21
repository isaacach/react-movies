/* eslint-disable react/prop-types */
import '../styles/slider.css'

export default function Slider({ media }) {

  
  const renderedMedia = media.map((med, i) => {
    return (
      <div className="media-card" key={i}>
        <div className="poster-wrapper">
          <img src={`https://image.tmdb.org/t/p/original/${med.poster_path}`} alt={med.title} />
        </div>
      </div>
    );
  });

  return <div className="slider">{renderedMedia}</div>;
}
