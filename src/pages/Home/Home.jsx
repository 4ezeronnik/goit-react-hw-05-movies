import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from "services/api"
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <ul>
                {movies.length > 0 &&
                    movies.map(({ name, title, id }) => (
                        <li key={id}>
                            <Link to={`/movies/${id}`}>
                                <h2>{title ? title : name}</h2>
                                </Link>
                        </li>))}
            </ul>
        </>
    );
};

export default Home;