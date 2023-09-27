import { useEffect, useState } from "react";
import { getTopRated } from "../apiService";
import '../styles/leaderboard.css'
import VoteAverageBar from "./VoteAverageBar";

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
    return (
      <div className="leaderboard-row" key={i}>
        <p className="title"><span># {i + 1}</span>{movie.title}</p>
        <p className="popularity">Popularity Score: {movie.popularity.toFixed(1)}</p>
        <div className="vote-count">
          <VoteAverageBar score={movie.vote_average}/>
          <p className="votes">{movie.vote_count} votes</p>
        </div>
      </div>
    );
  });

  return <div className="leaderboard-wrapper">{renderedTopRated}</div>;
}
