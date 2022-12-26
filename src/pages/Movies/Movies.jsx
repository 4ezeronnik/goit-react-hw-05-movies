import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api'

export const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query" || '');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ 'query': form.elements.query.value.trim() });

    form.reset();
 
  };
  
  useEffect(() => {
    if (queryParam === null) return;

    fetchSearchMovies(queryParam).then(res => {
          if (res.length === 0) {
      alert('Sorry, unfortunately we did not find this films')
      return
  }
    }).then(setMovies);

       if (!queryParam) {
      alert('There is no movies');
        return
       }
    

  }, [queryParam]);

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
