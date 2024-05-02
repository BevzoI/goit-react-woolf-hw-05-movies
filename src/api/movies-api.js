import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '09d500b4ce5da22054e85cc200e2b8c0' };

const getMoviesInTrend = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day`);
    return data.results;
  } catch (error) {
    console.log('error', error);
  }
};

const searchMovies = async search => {
  try {
    const { data } = await axios.get(`/search/movie?query=${search}`);
    return data.results;
  } catch (error) {}
};

const getMovieDetail = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.log(error);
  }
};

const getReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const moviesApi = {
  getMoviesInTrend,
  searchMovies,
  getMovieDetail,
  getCast,
  getReviews,
};
export default moviesApi;