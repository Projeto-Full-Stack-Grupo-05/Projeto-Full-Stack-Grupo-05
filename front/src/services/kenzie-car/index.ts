import axios from "axios";

const kenzieApi = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com.br",
  timeout: 3000,
});

export default kenzieApi;
