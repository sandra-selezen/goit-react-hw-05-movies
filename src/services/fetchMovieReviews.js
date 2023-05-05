import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchMovieReviews = async (id) => {
  const response = await axios.get(`${URL}movie/${id}/reviews?api_key=${API_KEY}`);
  console.log(response);
}