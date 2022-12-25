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

    if (movies.length === 0) {
      alert('There is no movies');
        form.reset();
        return
    }
  
    setSearchParams({ 'query': form.elements.query.value.trim() });

    form.reset();
 
  };

  
  useEffect(() => {
    if (queryParam === null) return;

    fetchSearchMovies(queryParam).then(setMovies);

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
