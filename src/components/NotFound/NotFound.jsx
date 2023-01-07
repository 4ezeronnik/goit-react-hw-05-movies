import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
         <>
            <h2>The page you’re looking for can’t be found. Please, try searching or go to
                 <Link to={'/'}> home page </Link>
            </h2>
        
        </>
    )
}