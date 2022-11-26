import { fetchMovieCast } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Cast = () => {
    const [moviesCast, setMoviesCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
    fetchMovieCast(movieId).then(setMoviesCast)
    }, [movieId]);

    return (
        <>
            <div>
                {moviesCast && (
                    moviesCast.map(movieCast => 
                <li key={movieCast.id}>
                    {movieCast.name}
                    {movieCast.character} 
                    </li>

                ))}
           </div>
        </>
    );
};