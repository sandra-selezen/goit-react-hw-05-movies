import { useState } from "react";

const Movies = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <input type="text" name="query" value={query} onChange={handleQueryChange} placeholder="Search movies"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Movies;