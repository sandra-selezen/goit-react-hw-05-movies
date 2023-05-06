import { useState, useEffect } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { fetchTrendingMovies } from "services/fetchTrendingMovies";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await fetchTrendingMovies();
        setTrendingMovies(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [setTrendingMovies]);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </>
  );
}

export default Home;