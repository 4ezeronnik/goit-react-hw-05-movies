import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api'

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') ?? '';
  
  const [text, setText] = useState("");
    

  const changeQuery = value => {
    setSearchParams(value !== "" ? { query: value } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchSearchMovies(queryParam).then(setMovies);
  };





    return (
        <>
        <div>
          <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={queryParam}
        onChange={e => changeQuery(e.target.value)}
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
