import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from './SharedLayout.module.css';
import ClipLoader from "react-spinners/ClipLoader";


export const SharedLayout = () => {
    return (
      <div>
        <nav className={styles.sharedLayoutContainer}>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        
            <Suspense fallback={<ClipLoader />}>
                <Outlet />
                </Suspense>
        </div>
    )
}