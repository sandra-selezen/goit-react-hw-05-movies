import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
import { Item, ItemImage, ItemTitle } from './MovieItem.styled';

export const MovieItem = ({ movie }) => {
  const location = useLocation();

  return (
    <Item>
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        <ItemImage src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
        <ItemTitle>{movie.title}</ItemTitle>
      </Link>
    </Item>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired
}