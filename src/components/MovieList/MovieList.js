import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';
import { List } from './MovieList.styled';

export const MovieList = ({ movies }) => {

  return (
    <List>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}