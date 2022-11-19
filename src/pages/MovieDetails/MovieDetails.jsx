import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

export const MovieDetails = () => {
    const { id } = useParams();


    fetchMovieDetails();



    return (
        <>
            <div>
                
           </div>
        </>
    )
}