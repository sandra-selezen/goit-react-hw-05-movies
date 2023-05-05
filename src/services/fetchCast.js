import axios from "axios";
import { API_KEY, URL } from "./constants";

export const fetchCast = async (id) => {
  const response = await axios.get();
  console.log(response);
}