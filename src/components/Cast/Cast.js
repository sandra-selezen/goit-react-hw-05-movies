import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/fetchMovieCast";
import { Image, Item, List, Title } from "./Cast.styled";

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
    <List>
      {cast.map(item => (
        <Item key={item.id}>
          <Image src={`https://image.tmdb.org/t/p/w300${item.profile_path}`} alt={item.name} />
          <Title>{item.name}</Title>
          <Title>Character: {item.character}</Title>
        </Item>
      ))}
    </List>
  )
}

export default Cast;