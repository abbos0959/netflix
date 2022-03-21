import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Banner.css"

import requests from "../request";

export const Banner = () => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movies, "salom duny");
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseURL}${movies?.backdrop_path})`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button"> Play</button>
          <button className="banner_button"> My List</button>
        </div>
        <h1 className="banner_description">{movies?.overview}</h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  );
};
