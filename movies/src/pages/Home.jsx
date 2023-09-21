import { useEffect, useState } from "react"
import { getPopularMovies } from "../apiService"
import SearchBar from "../components/SearchBar"
import '../styles/home.css'
import Slider from "../components/Slider"

export default function Home() {
  const [media, setMedia] = useState([]);

  console.log(media);

  useEffect(() => {
    const getPopMovies = async () => {
      setMedia(await getPopularMovies())
    }

    getPopMovies();
  },[])

  return (
    <div className="home">
      <div className="search-box">
        <div className="search-text">
          <h2>Discover millions of movies and TV shows </h2>
        </div>
        <SearchBar />
      </div>
      <Slider media={media}/>
    </div>
  )
}