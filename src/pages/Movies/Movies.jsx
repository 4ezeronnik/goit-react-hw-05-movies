import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? '';

  // useEffect(() => {
  //   fetchSearchMovies().then(setMovies);
  // }, []);

  fetchSearchMovies();

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
        </>
    );
};
