import { fetchMovieReviews } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews);
    }, [movieId]);
    

    return (

        <>
            { reviews.length > 0 ? (reviews.map(review => 
                <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                    
                </li>))
                :
                (<p>We don't have any reviews for this movie.</p>)
            }


        </>
    );
};

export default Reviews;