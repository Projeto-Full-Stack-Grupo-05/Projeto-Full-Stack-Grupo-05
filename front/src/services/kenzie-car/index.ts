import axios from "axios";

export const kenzieApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com",
  timeout: 3000,
});
