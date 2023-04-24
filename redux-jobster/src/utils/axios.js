import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default baseURL;
