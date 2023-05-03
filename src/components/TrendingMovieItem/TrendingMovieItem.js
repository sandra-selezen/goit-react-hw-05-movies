import { Link } from "react-router-dom"

export const TrendingMovieItem = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li><Link key={movie.id} to={`${movie.id}`}>{movie.title}</Link></li>
      ))}
    </ul>
  )
}