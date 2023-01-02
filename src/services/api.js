import axios from 'axios';

const KEY = '755b9c6082cc4d5d6e54f37544fe5f24';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?api_key=${KEY}`);
    console.log(response.data.results);
    return response.data.results;
};

export const fetchSearchMovies = async (name) => {
    const response = await axios.get(`search/movie?api_key=${KEY}&query=${name}`)
    .catch(error => {
            if (!error.response) {
               console.log(error.response.data);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log(error.config);
            }
    });
    console.log(response.data.results);
    return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
    const response = await axios.get(`movie/${movieId}?api_key=${KEY}`)
    return response.data;
};

export const fetchMovieCast = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
    return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);
    return response.data.results;
};
