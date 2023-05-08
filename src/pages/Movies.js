import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { toast } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { fetchSearchMovie } from "services/fetchSearchMovie";
import { SearchForm } from "components/SearchForm/SearchForm";
import { List } from "components/MovieList/MovieList.styled";
import { Item, ItemImage, ItemTitle } from "components/MovieList/MovieItem.styled";
import NoPosterDetails from "../images/no-poster.png";

const Movies = () => {
  const [serchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === "") return;

    const fetchedSearchMovie = async (query) => {
      try {
        Loading.circle();
        const movies = await fetchSearchMovie(query);
        setSearchMovie(movies);
      } catch (error) {
        console.log(error);
      } finally {
        Loading.remove();
      }
    }
    fetchedSearchMovie(query);
  }, [query]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.elements.query.value === "") {
      toast('Please enter search word!', { icon: '🦄', });
      return setSearchParams({});
    }

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  }

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} />
      <List>
        {serchMovie.map(item => (
          <Item key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.poster_path
                ? <ItemImage src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} />
                : <ItemImage src={NoPosterDetails} alt={item.title} />}
              <ItemTitle>{item.title}</ItemTitle>
            </Link>
          </Item>
        ))}
      </List>
    </>
  );
}

export default Movies;