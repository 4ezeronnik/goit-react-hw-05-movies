import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { ArrowLeft } from 'react-feather';
import pendingImage from '../../pictures/pending.png';
import ClipLoader from "react-spinners/ClipLoader";
import NotFound from '../../components/NotFound/NotFound';
import STATUS from 'services/status-state-machine';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    const { title, vote_average, overview, genres, poster_path } = movies;
    const imageURL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
           if (!movieId) return;
                setStatus(STATUS.PENDING);
        const fetchFilmDetails = async () => {
            try {
                const fetchFilms = await fetchMovieDetails(movieId);
                setMovies(fetchFilms);
                setStatus(STATUS.RESOLVED);
            } catch {
                setStatus(STATUS.REJECTED)
            };
        };
        fetchFilmDetails();
          
    }, [movieId]);
    
    return (
        <>
            {status === STATUS.PENDING && (<ClipLoader/>)}
            {status === STATUS.RESOLVED && (<div>
                <Link to={backLinkHref}>
                    <ArrowLeft size={20} />
                    Go back
                </Link>
                <div className={styles.card}>
                    <img src={poster_path ? (`${imageURL}${poster_path}`) : pendingImage} alt={title} className={styles.picture} />
                    <div class={styles.content}>
                <h2>{title}</h2>
                <p>User Score: {Math.round(vote_average * 10)}% </p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                {genres && (genres.map(genre => (
                    <li key={genre.id}>
                        {genre.name}
                    </li>
                    
                )))}
                </div>
                </div>

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
                {status === STATUS.REJECTED && <NotFound />}
        </>
    );
};

export default MovieDetails;