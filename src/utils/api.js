import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGRkNWNmYjNlZTRlYjVmMmVmZmIyNTQ1YWMyODBiNyIsInN1YiI6IjY0YjM5NjA4ZTBjYTdmMDBlNzcyMTMzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tah5y-FAphv00VenTv3cUs5J4-G1HtTBiZsAnaSlkmQ",
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
