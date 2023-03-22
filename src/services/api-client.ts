import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b2ccad535b414a828b5def35ae8bcd6c",
  },
});
