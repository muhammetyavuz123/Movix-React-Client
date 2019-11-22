import axios from "axios";
import { API_HOST } from ".././config/api";

export default axios.create({
  baseURL: `${API_HOST}`
});
