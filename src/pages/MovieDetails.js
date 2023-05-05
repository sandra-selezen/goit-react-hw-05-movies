import { useEffect, useState, useRef } from "react";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "services/fetchMovieDetails";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const fetchDetails = async (id) => {
      try {
        const fetchedMovieDetails = await fetchMovieDetails(id);
        setMovieDetails(fetchedMovieDetails);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetails(movieId);
  }, [movieId]);

  const { title, overview, poster_path, movieGenres, vote_average } = movieDetails;
  
  return (
    <>
      <Link to={backLinkRef.current}>Go Back</Link>
      <h1>{title}</h1>
      <p>User Score: {vote_average}%</p>
      <img src={poster_path} alt={title} />
      <p><b>Overview</b></p>
      <p>{overview}</p>
      <p><b>Genres</b></p>
      <p>{movieGenres}</p>
      <p>Additional information</p>
      <ul>
        <li><Link to={"cast"}>Cast</Link></li>
        <li><Link to={"reviews"}>Reviews</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default MovieDetails;