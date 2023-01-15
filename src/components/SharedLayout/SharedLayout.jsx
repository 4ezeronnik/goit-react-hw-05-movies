import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from './SharedLayout.module.css'

export const SharedLayout = () => {
    return (
      <div className={styles.container}>
        <nav>
          <NavLink to="/" className={styles.link}>Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
                </Suspense>
        </div>
    )
}