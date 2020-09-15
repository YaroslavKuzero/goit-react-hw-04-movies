import axios from 'axios';

const apiKey = 'ecdbdbfa70e4ac4519059cb33ec4bb80';
axios.defaults.baseURL = 'https://api.themoviedb.org';

async function fetchTrendingMovie() {
  try {
    const response = await axios.get(`/3/trending/all/day?api_key=${apiKey}`);
    const { results } = response.data;
    return results;
  } catch (error) {
    console.log(error);
  }

};

async function fetchDetailsMovie(id) {
  try {
    const response = await axios.get(`/3/movie/${id}?api_key=${apiKey}`)
    const { data } = response
    return data;
  } catch (error) {
    console.log(error);
  }

}

async function fetchQuery(query) {
  try {
    const response = await axios.get(`/3/search/movie?query=${query}&api_key=${apiKey}&page=1`);
    const { data } = response
    return data;
  } catch (error) {
    console.log(error);
  }

}

async function fetchCast(movieId) {
  try {
    const response = await axios.get(`/3/movie/${movieId}/credits?api_key=${apiKey}`);
    const { data } = response
    return data;
  } catch (error) {
    console.log(error);
  }

}

async function fetchReviews(movieId) {
  try {
    const response = await axios.get(`/3/movie/${movieId}/reviews?api_key=${apiKey}&page=1`);
    const { data } = response
    return data;
  } catch (error) {
    console.log(error);
  }

}

const getImgUrl = (url) => {
  if (url !== null) {
    return `https://image.tmdb.org/t/p/original${url}`;
  }

  return 'http://placebeard.it/g/640/480'
}

export default { fetchTrendingMovie, fetchDetailsMovie, fetchQuery, fetchCast, fetchReviews, getImgUrl };


