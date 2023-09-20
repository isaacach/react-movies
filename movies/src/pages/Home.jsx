import { useEffect } from "react"
import { getPopularMovies } from "../apiService"

export default function Home() {

  useEffect(() => {
    const getPopMovies = async () => {
      return await console.log(getPopularMovies())
    }

    getPopMovies();
  },[])
  return (
    <div></div>
  )
}