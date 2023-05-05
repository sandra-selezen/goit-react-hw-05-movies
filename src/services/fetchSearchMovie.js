import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchSearchMovie = async (query) => {
  const response = await axios.get(`${URL}search/movie?api_key=${API_KEY}&query=${query}`);
  const { results } = response.data;

  return results;
}