import axios from "axios";

const baseURL = import.meta.env.VITE_MARVEL_API_BASE_URL;

const httpClient = axios.create({
  baseURL,
});

export default httpClient;
