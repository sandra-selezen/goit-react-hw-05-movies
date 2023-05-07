import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

export const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
        <h3>{movie.title}</h3>
      </Link>
    </li>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired
}