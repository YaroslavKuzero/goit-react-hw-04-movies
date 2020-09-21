import axios from 'axios';

const apiKey = 'ecdbdbfa70e4ac4519059cb33ec4bb80';
axios.defaults.baseURL = 'https://api.themoviedb.org';

async function fetchTrendingMovie() {
  try {
    const { data } = await axios.get(`/3/trending/all/day?api_key=${apiKey}`);
    return data.results;
  } catch (error) {
    console.error(error);
  }

};

async function fetchDetailsMovie(id) {
  try {
    const { data } = await axios.get(`/3/movie/${id}?api_key=${apiKey}`)
    return data;
  } catch (error) {
    console.error(error);
  }

}

async function fetchQuery(query) {
  try {
    const { data } = await axios.get(`/3/search/movie?query=${query}&api_key=${apiKey}&page=1`);
    return data;
  } catch (error) {
    console.error(error);
  }

}

async function fetchCast(movieId) {
  try {
    const { data } = await axios.get(`/3/movie/${movieId}/credits?api_key=${apiKey}`);
    return data;
  } catch (error) {
    console.error(error);
  }

}

async function fetchReviews(movieId) {
  try {
    const { data } = await axios.get(`/3/movie/${movieId}/reviews?api_key=${apiKey}&page=1`);
    return data;
  } catch (error) {
    console.error(error);
  }

}

const getImgUrl = (url) => {
  if (url !== null) {
    return `https://image.tmdb.org/t/p/original${url}`;
  }

  return 'http://placebeard.it/g/640/480'
}

export { fetchTrendingMovie, fetchDetailsMovie, fetchQuery, fetchCast, fetchReviews, getImgUrl };


