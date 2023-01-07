import { Route, Routes, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
    <>
       <div>
        <nav>
          <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        </nav>
        </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={< Movies />} />
        
          <Route path="/movies/:movieId" element={< MovieDetails />}>
        <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
         <Route path="*" element={<Home />} />
        
          
      </Routes>
    </>
  );
};
