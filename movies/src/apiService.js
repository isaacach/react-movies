import { MOVIEDB_KEY } from '../keys.js';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${MOVIEDB_KEY}`
  }
};

export const getPopularMovies = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options);
      const data =  await res.json();
      return await data.results;
    } catch (err) {
      console.log(err);
    }
}

export const getPopularShows = async () => {
    try {
      const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options);
      const data =  await res.json();
      return await data.results;
    } catch (err) {
      console.log(err);
    }
}

export const getTopRated = async () => {
  try {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    const data = await res.json();
    return data;
  } catch(err) {
    console.log(err);
  }
}