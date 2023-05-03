import { Link } from "react-router-dom"

export const TrendingMovieItem = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}><Link to={`${movie.id}`}>{movie.title}</Link></li>
      ))}
    </ul>
  )
}