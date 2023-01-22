import { fetchMovieCast } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import pendingImage from '../../pictures/pending.png';
import STATUS from "services/status-state-machine";
import { ClipLoader } from "react-spinners";
import NotFound from "components/NotFound/NotFound";

const Cast = () => {
    const [moviesCast, setMoviesCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();

    const imageURL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
        if (!movieId) return;
        setStatus(STATUS.PENDING);
        const fetchFilmDetails = async () => {
            try {
                const fetchFilms = await fetchMovieCast(movieId);
                setMoviesCast(fetchFilms);
                setStatus(STATUS.RESOLVED);
            } catch {
                setStatus(STATUS.REJECTED)
            };
        };
        fetchFilmDetails();
  
    }, [movieId]);

    return (
        <>
            {status === STATUS.PENDING && <ClipLoader />}
            {status === STATUS.RESOLVED && (<div>
                {moviesCast.length > 0 ? (
                    moviesCast.map(movieCast => 
                        <li key={movieCast.id}>
                             <img src={movieCast.profile_path ? (`${imageURL}${movieCast.profile_path}`) : pendingImage} alt={movieCast.name} width="255px" height="375px"></img>
                   <p>{movieCast.name}</p> 
                   <p>Character: {movieCast.character}</p> 
                    </li>

                    ))
                    :

              (<p>We don't have any information about cast for this movie.</p>)
                }
            </div>)}
            {status === STATUS.REJECTED && <NotFound/>}
            
        </>
    );
};

export default Cast;