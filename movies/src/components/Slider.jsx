/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import { getPopularMovies, getPopularShows } from '../apiService.js';
import "../styles/slider.css";

export default function Slider() {
  const inputRef = useRef(null)
  const backgroundRef = useRef(null)
  const [media, setMedia] = useState([]);
  const [sliderBg, setSliderBg] = useState('')

  console.log(media);

  useEffect(() => {
    const getPopMovies = async () => {
      setMedia(await getPopularMovies())
    }

    getPopMovies();
  },[])

  const handleInputChange = () => {
    if (!inputRef.current.checked) {
      const getPopMovies = async () => {
        setMedia(await getPopularMovies())
      }
      getPopMovies();
    } else {
      const getPopShows = async () => {
        setMedia(await getPopularShows())
      }
      getPopShows();
    }
  }

  const handleMouseOver = (e) => {
    console.log(e.target.id);
    setSliderBg(`https://image.tmdb.org/t/p/original/${e.target.id}`)
  }

  if (backgroundRef) {
    console.log(backgroundRef);
  }

  const renderedMedia = media.map((med, i) => {
    return (
      <div className="media-card" key={i} >
        <div className="poster-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/original/${med.poster_path}`}
            alt={med.title}
            id={med.backdrop_path}
            onMouseEnter={handleMouseOver}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="slider-wrapper">
      <div className="trending">
        <p>Trending</p>
        <input ref={inputRef} type="checkbox" onChange={handleInputChange}/>
        <p className="movies-check">Movies</p>
        <p className="shows-check">TV Shows</p>
        <div className="check-slider"></div>
      </div>
    <div className="slider" ref={backgroundRef} style={{ backgroundImage: `url(${sliderBg})`}} >
      <div className="media">
      {renderedMedia}
      </div>
    </div>
    </div>
  );
}
