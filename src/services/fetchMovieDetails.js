import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${URL}movie/${id}?api_key=${API_KEY}`);

  const { title, overview, poster_path, genres, vote_average } = response.data;
  const movieGenres = genres.map(item => item.name).join(", ");
  const movieInfo = {
    title,
    overview,
    poster_path,
    movieGenres,
    vote_average: (vote_average * 10).toFixed(),
  }

  return movieInfo;
}