import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${URL}trending/movie/day?api_key=${API_KEY}`);
  const movies = response.data.results;
  
  return movies;
}