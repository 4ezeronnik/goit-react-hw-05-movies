import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from "services/api"

export const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
    }, []);

    return (
        <>
            <ul>
                {movies.length > 0 &&
                    movies.map(({ name, title, id }) => (
                        <li key={id}>
                            <h2>{title ? title : name }</h2>
                        </li>))}
            </ul>
        </>
    );
};