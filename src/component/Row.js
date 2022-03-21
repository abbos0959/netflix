import axios from "axios";
import React, { useEffect, useState } from "react";
// import requests from "../request";
import "./Row.css"

export const Row = ({ title,fetch,LargeRow }) => {
  const baseURL="https://image.tmdb.org/t/p/original/"
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${fetch}`
      );
      //   setMovies(request.data.results)
      console.log(request.data.results);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);
  //   console.log(movies);`

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">

      {movies?.map((value) => (
        <img  className={`row_poster  ${LargeRow && "row_posterLarge"}`} src={`${baseURL}${value?.poster_path}`}/>
      ))}
      </div>
    </div>
  );
};
