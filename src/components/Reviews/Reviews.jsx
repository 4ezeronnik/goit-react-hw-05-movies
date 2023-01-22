import { fetchMovieReviews } from "services/api";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import STATUS from "services/status-state-machine";
import { ClipLoader } from "react-spinners";
import NotFound from "components/NotFound/NotFound";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) return;
        setStatus(STATUS.PENDING);
              const fetchFilmDetails = async () => {
            try {
                const fetchFilms = await fetchMovieReviews(movieId);
                setReviews(fetchFilms);
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
            {status === STATUS.RESOLVED && (reviews.length > 0 ? (reviews.map(review => 
                <li key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                    
                </li>))
                :
                (<p>We don't have any reviews for this movie.</p>))}
            {status === STATUS.REJECTED && <NotFound/>}
        </>
    );
};

export default Reviews;