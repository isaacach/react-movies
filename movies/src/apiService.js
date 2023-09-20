import { MOVIEDB_KEY } from '../keys.js';
import axios from 'axios'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${MOVIEDB_KEY}`
  }
};

export const getPopularMovies = async () => {
  axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(data => console.log(data))
    .catch(error => console.log(error))
}