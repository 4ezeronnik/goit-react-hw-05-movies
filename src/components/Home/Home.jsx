import axios from 'axios';

const KEY = '755b9c6082cc4d5d6e54f37544fe5f24';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.baseURL = BASE_URL;

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/all/day?api_key=${KEY}`);

    return response.data.original_title;
}