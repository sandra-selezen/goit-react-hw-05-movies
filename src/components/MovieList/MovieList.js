import PropTypes from 'prop-types';
import { MovieItem } from './MovieItem';

export const MovieList = ({ movies }) => {

  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}