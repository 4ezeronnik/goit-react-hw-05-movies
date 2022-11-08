import axios from 'axios';

const KEY = '755b9c6082cc4d5d6e54f37544fe5f24';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?api_key=${KEY}`);
console.log(response.data.results)
    return response.data.results;
}

export const fetchSearchMovies = async (name) => {
    const response = await axios.get(`/search/search-movies?api_key=${KEY}&query=${name}&page=1`);
    console.log(response.data.results);
    return response.data.results;
}
