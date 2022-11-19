import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        if (movie === null) return;

        fetchMovieDetails(id).then(setMovie)
    }, [id]);



    return (
        <>
            <div>
                <h2>Movie {movie.title} - {id}
                </h2>
           </div>
        </>
    )
}