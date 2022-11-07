import { useMemo, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';


export const Movies = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? '';

    


    return (
        <>
           <div>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
        </>
    );
};
