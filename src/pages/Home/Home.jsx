import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from "services/api"
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

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
                            <Link to={`${id}`} state={{ from: location }}>
                                <h2>{title ? title : name}</h2>
                                </Link>
                        </li>))}
            </ul>
        </>
    );
};