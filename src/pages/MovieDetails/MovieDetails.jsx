import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    const { title, vote_average, overview, genres } = movies;
    console.log(JSON.stringify(genres));
    

    useEffect(() => {
        if (!movieId) return;
        fetchMovieDetails(movieId).then(setMovies);
    }, [movieId]);
    

    return (
     
        <>
            <div>
                <h2>{title}</h2>
                <p>User Score: {Math.round(vote_average * 10)}% </p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {/* {genres.map(genre => (
                    <li key={genre.id}>
                  {genre.name}
              </li>
            ))} */}

            </div>
        </>
    );
};