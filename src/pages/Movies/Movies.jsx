import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api'

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('query' ?? '');


  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ 'query': e.target.elements[0].value })
    console.log(e.target.elements[0].value);
     fetchSearchMovies(queryParam).then(setMovies);
  };

    return (
        <>
        <div>
          <form onSubmit={handleSubmit}>
      <input
        type="text"
       
        onChange={e => (e.target.value)}
      />
      <button type="submit">Search</button>
          </form>
          </div>
        {movies.length > 0 && (
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
