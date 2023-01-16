import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { ArrowLeft } from 'react-feather';
import pendingImage from '../../pictures/pending.png';

const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    const { title, vote_average, overview, genres, poster_path } = movies;
    const imageURL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        if (!movieId) return;
        setStatus('pending');
        try {
            fetchMovieDetails(movieId)
            .then(setMovies, setStatus('resolved'))
        } catch { setStatus('rejected')
        }
          
    }, [movieId]);
    
    return (
        <>
            
            {status === 'pending' && (<div>Loading</div>)}
            {status === 'resolved' && (<div>
                <Link to={backLinkHref}>
                    <ArrowLeft size={20} />
                    Go back
                </Link>
                <h2>{title}</h2>
                <img src={poster_path ? (`${imageURL}${poster_path}`) : pendingImage} alt={title} width="100px" height="150px"/>
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
            </div>)}
            {status === 'rejected' && (<div>Sorry, there is nothing</div>)}
        </>
    );
};

export default MovieDetails;