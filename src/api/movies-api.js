import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = { api_key: '8aba4e3419a44727b7eb66f35fce4fa2' };

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
