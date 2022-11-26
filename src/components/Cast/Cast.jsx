import { fetchMovieCast } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();
   
    fetchMovieCast(movieId);

    console.log();

    // useEffect(() => {
    // fetchMovieCast(movieId).then(setMovieCast)
    // }, [movieId]);

    return (
        <>
            <div>
                {movieCast && (
                    movieCast.map(movieCast => 
                        <li>
                           {movieCast.title} 
                        </li>)
                )}
           </div>
        </>
    );
};