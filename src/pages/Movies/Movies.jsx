import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? '';

  useEffect(() => {
    fetchSearchMovies(searchParams).then(setMovies);
  }, [searchParams]);

  const changeFilter = value => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };

    return (
        <>
           <div>
      <input
        type="text"
        value={filterParam}
        onChange={e => changeFilter(e.target.value)}
      />
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
