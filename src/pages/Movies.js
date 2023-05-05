import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "services/fetchSearchMovie";

const Movies = () => {
  const [serchMovie, setSearchMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  console.log(query);
  const handleQueryChange = (event) => {
    setSearchParams({ query: event.target.value });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const fetchedSearchMovie = async (query) => {
      try {
        const movies = await fetchSearchMovie(query);
        setSearchMovie(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchedSearchMovie(query);
  }

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <input type="text" name="query" value={query} onChange={handleQueryChange} placeholder="Search movies"/>
        <button type="submit">Search</button>
      </form>
      <ul>
        {serchMovie.map(item => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </>
  );
}

export default Movies;