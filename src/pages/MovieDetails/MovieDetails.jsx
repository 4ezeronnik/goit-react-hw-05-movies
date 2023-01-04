import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const { movieId } = useParams();

    const { title, vote_average, overview, genres, poster_path } = movies;
    const imageURL = 'https://image.tmdb.org/t/p/w500/';
    

    useEffect(() => {
        if (!movieId) return;
        fetchMovieDetails(movieId).then(setMovies);
    }, [movieId]);
    
    return (
        <>
            <div>
                <h2>{title}</h2>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
                <p>User Score: {Math.round(vote_average * 10)}% </p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres && (genres.map(genre => (
                    <li key={genre.id}>
                  {genre.name}
              </li>
                )))}

                <ul>
                    <p>Additional information</p>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                      <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />

            </div>
        </>
    );
};