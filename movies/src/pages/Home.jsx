
import SearchBar from "../components/SearchBar"
import '../styles/home.css'
import Slider from "../components/Slider"

export default function Home() {


  return (
    <div className="home">
      <div className="search-box">
        <div className="search-text">
          <h2>Discover millions of movies and TV shows </h2>
        </div>
        <SearchBar />
      </div>
      <Slider />
    </div>
  )
}