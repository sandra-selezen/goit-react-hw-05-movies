import { useState, useEffect } from "react";
import { TrendingMovieItem } from "components/TrendingMovieItem/TrendingMovieItem";
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
    <main>
      <div>
        <h1>Trending today</h1>
        <TrendingMovieItem movies={trendingMovies}  />
      </div>
    </main>
  );
}

export default Home;