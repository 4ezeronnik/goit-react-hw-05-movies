import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api'

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    fetchSearchMovies(filterParam).then(setMovies);
  }, [filterParam]);

  const changeFilter = value => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

    return (
        <>
        <div>
          <form>
      <input
        type="text"
        value={filterParam}
        onChange={e => changeFilter(e.target.value)}
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
