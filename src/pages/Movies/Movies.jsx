import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';
import ClipLoader from "react-spinners/ClipLoader";
import NotFound from '../../components/NotFound/NotFound';
import STATUS from 'services/status-state-machine';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query" ?? '');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ 'query': form.elements.query.value.trim() });

    form.reset();
 
  };
  
  useEffect(() => {
    if (queryParam === null) return;
    if (!queryParam) {
      alert('There are no movies');
     
      setSearchParams({});
        return
       }

    fetchSearchMovies(queryParam).then(res => {
      if (res.length === 0) {
        alert('Sorry, unfortunately we did not find these films');
         setSearchParams({});
      }
      if (res.length > 0) {
        setStatus(STATUS.RESOLVED)
        setMovies(res)
      }
    });


  }, [queryParam, setSearchParams]);

    return (
      <>
        
        <div>
          <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
      />
      <button type="submit">Search</button>
          </form>
          </div>
        {movies && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={{ from: location }}>
                  {movie.title ?? movie.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        </>
    );
};

export default Movies;
