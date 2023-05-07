import { useState, useEffect } from "react";
import { MovieList } from "components/MovieList/MovieList";
import { fetchTrendingMovies } from "services/fetchTrendingMovies";
import { MainTitle } from "components/MovieList/MovieList.styled";

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
      <MainTitle>Trending today</MainTitle>
      <MovieList movies={trendingMovies} />
    </>
  );
}

export default Home;