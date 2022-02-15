import axios from "axios";

const $axios = axios.create({
  baseURL: "https://jedlik-expr-mongoose-backend.herokuapp.com/",
  withCredentials: true,
});

export default $axios;
