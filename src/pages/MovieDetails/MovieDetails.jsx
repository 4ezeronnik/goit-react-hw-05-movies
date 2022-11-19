import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const { movie, setMovie } = useState(null);

    useEffect(() => {
        fetchMovieDetails(movieId);
    }, [movieId]);


    return (
        <>
            MovieDetails
        </>
    )
}