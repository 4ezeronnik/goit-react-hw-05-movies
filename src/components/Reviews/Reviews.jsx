import { fetchMovieReviews } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);
    return (
        <>
            Reviews
        </>
    );
};