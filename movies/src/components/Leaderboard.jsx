import { useEffect, useState } from "react";
import { getTopRated } from "../apiService";
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../styles/leaderboard.css'

export default function Leaderbaord() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getTop = async () => {
      const movies = await getTopRated();
      setTopRated(await movies);
      console.log(await movies);
    };
    getTop();
  },[]);

  const renderedTopRated = topRated.map((movie, i) => {
    const now = movie.vote_average * 10
    return (
      <div className="leaderboard-row" key={i}>
        <p className="title"><span># {i + 1}</span>{movie.title}</p>
        <p>Popularity Score: {movie.popularity.toFixed(1)}</p>
        <div className="vote-count">
          <ProgressBar now={now} label={`${now}%`}/>
          <p>{movie.vote_count}</p>
        </div>
      </div>
    );
  });

  return <div className="leaderboard-wrapper">{renderedTopRated}</div>;
}
