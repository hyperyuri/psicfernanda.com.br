import axios from "axios";

const api = axios.create({
  baseURL: "https://sendmail-fernanda.herokuapp.com/",
});

export default api;
