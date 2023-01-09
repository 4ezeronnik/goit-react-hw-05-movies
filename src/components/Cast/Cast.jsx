import { fetchMovieCast } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Cast = () => {
    const [moviesCast, setMoviesCast] = useState([]);
    const { movieId } = useParams();

    const imageURL = 'https://image.tmdb.org/t/p/w500/';

    useEffect(() => {
    fetchMovieCast(movieId).then(setMoviesCast)
    }, [movieId]);

    return (
        <>
            <div>
                {moviesCast.length > 0 ? (
                    moviesCast.map(movieCast => 
                        <li key={movieCast.id}>
                             <img src={`${imageURL}${movieCast.profile_path}`} alt={movieCast.name} width="255px" height="375px"></img>
                   <p>{movieCast.name}</p> 
                   <p>Character: {movieCast.character}</p> 
                    </li>

                    ))
                    :

              (<p>We don't have any information about cast for this movie.</p>)
                }
           </div>
        </>
    );
};

export default Cast;