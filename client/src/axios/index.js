import axios from "axios";

const url = "http://lacalhost:3000";

export default axios.create({
  baseURL: url
});
