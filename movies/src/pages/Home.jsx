import { useEffect } from "react"
import { getPopularMovies } from "../apiService"
import SearchBar from "../components/SearchBar"
import '../styles/home.css'

export default function Home() {

  useEffect(() => {
    const getPopMovies = async () => {
      return await console.log(getPopularMovies())
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
    </div>
  )
}