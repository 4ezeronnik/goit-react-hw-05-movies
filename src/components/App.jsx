import { Route, Routes } from 'react-router-dom';
// import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from '../pages/MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
// import { NotFound } from './NotFound/NotFound';
// import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));


export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />} />
        <Route path="/movies" element={< Movies />} />
        
          <Route path="/movies/:movieId" element={< MovieDetails />}>
        <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
          <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        </Suspense>
    </>
  );
};
