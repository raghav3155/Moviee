import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmRiOTY5MDk4OGE2NTU1ZmYzNWQ2MjAzMWEzOGVkOSIsInN1YiI6IjY0YjY3MzY0Nzg1NzBlMDEwMDhhYjI2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrufJtfEPrD6LbOz7gfd0CjOHh33fMlxE_Ib4FvZogs";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
