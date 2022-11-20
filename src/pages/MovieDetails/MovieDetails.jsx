import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
        if (!movieId) return;
        fetchMovieDetails(movieId).then(setMovie);
    }, [movieId]);
    

    return (
        <>
            <div>
                <h2>{movie.title}</h2>
            </div>
        </>
    );
};