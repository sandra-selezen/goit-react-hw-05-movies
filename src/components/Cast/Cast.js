import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/fetchMovieCast";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async (id) => {
      try {
        const fetchedCast = await fetchMovieCast(id);
        setCast(fetchedCast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast(movieId);
  }, [movieId]);

  return (
    <ul>
      {cast.map(item => (
        <li key={item.id}>
          <img src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  )
}

export default Cast;