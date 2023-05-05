import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "services/fetchSearchMovie";

const Movies = () => {
  const [serchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query === null) return;

    const fetchedSearchMovie = async (query) => {
      try {
        const movies = await fetchSearchMovie(query);
        setSearchMovie(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchedSearchMovie(query);
  }, [query]);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.elements.query.value === "") {
      return setSearchParams({});
    }

    setSearchParams({ query: form.elements.query.value });
    form.reset();
  }

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <input type="text" name="query" placeholder="Search movies"/>
        <button type="submit">Search</button>
      </form>
      <ul>
        {serchMovie.map(item => (
          <li key={item.id}><Link to={`/movies/${item.id}`}>{item.title}</Link></li>
        ))}
      </ul>
    </>
  );
}

export default Movies;