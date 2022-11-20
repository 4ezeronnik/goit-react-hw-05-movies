import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const { movieId } = useParams();
    console.log(movieId);

    const movie = fetchMovieDetails(movieId);
    


    return (
        <>
            <div>
                
           </div>
        </>
    )
}