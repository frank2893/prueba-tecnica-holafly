import axios from "axios";

export const getKittens = async () => {
  return await axios
    .get("https://jsonplaceholder.org/posts")
    .then((response) => response.data);
};
