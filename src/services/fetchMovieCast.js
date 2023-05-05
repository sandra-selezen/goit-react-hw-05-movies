import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchMovieCast = async (id) => {
  const response = await axios.get(`${URL}movie/${id}/credits?api_key=${API_KEY}`);
  const { cast } = response.data;
  
  return cast;
}