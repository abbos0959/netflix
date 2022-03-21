import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../request";

export const Row = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      //   setMovies(request.data.results)
      console.log(request.data.results);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);
  //   console.log(movies);`

  return (
    <div>
      <h2>{title}</h2>

      {movies.map((value) => (
        <div>{value.name}</div>
      ))}
    </div>
  );
};
