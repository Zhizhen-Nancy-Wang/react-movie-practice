import axios from "axios";

const apiEp = "https://imdb-api.com/en/API/SearchMovie/k_n0f45f2s/";

export const fetchMovie = (search) => {
  //   console.log(search);

  //   const aa = apiEp + search;
  //   console.log(aa);

  try {
    const response = axios.get(apiEp + search);

    console.log(response);

    return response;
  } catch (error) {
    return error.message;
  }
};
