import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api'

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query" || '');
  
  useEffect(() => {
    if (queryParam === null) return;
    if (queryParam === '') {
      alert(`Please, enter the movie's name`);
      return;
    }
    fetchSearchMovies(queryParam).then(setMovies);
  }, [queryParam])


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ 'query': form.elements.query.value });
    if (movies.length === 0) {
      alert(`Sorry, we can't find any movie with this name`);
      return
    };
     form.reset();
  };

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
