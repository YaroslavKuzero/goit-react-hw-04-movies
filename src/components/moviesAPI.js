import axios from 'axios'
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'ecdbdbfa70e4ac4519059cb33ec4bb80';

const fetchTrendingMovie = () => {
  return (axios.get(`${baseUrl}trending/all/day?api_key=${apiKey}`).then(res => res.data.results))
};

const fetchDetailsMovie = (id) => {
  return (axios.get(`${baseUrl}movie/${id}?api_key=${apiKey}`).then(res => res.data))
}

const fetchQuery = (query) => {
  return (axios.get(`${baseUrl}search/movie?query=${query}&api_key=${apiKey}&page=1`).then(res => res.data))
}

const fetchCast = (movieId) => {
  return (axios.get(`${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`).then(res => res.data))
}

const fetchReviews = (movieId) => {
  return (axios.get(`${baseUrl}movie/${movieId}/reviews?api_key=${apiKey}&page=1`).then(res => res.data))
}

const getImgUrl = (url) => {
  return `https://image.tmdb.org/t/p/original${url}`;
}

export default { fetchTrendingMovie, fetchDetailsMovie, fetchQuery, fetchCast, fetchReviews, getImgUrl };