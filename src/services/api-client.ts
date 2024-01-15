import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0274223c8b31408384ef4aa2d2bb034e",
  },
});
