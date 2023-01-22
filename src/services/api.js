import axios from 'axios';

const KEY = '755b9c6082cc4d5d6e54f37544fe5f24';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${KEY}`);
    return data.results;
};

export const fetchSearchMovies = async (name) => {
    const { data } = await axios.get(`search/movie?api_key=${KEY}&query=${name}`)
    return data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}?api_key=${KEY}`)
    return data;
};

export const fetchMovieCast = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
    return data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
    return data.results;
};
