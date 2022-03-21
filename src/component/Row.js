import axios from "axios";
import React, { useEffect, useState } from "react";
// import requests from "../request";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

export const Row = ({ title, fetch, LargeRow }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://api.themoviedb.org/3${fetch}`);
      //   setMovies(request.data.results)
      console.log(request.data.results);
      setMovies(request.data.results);
    }
    fetchData();
  }, []);
  //   console.log(movies);`
  
  const HandleClick = (movies) => {
    console.log("click");
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movies?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // https://www.youtube.com/watch?v=ue80QwXMRHg
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((value) => (
          <img
            onClick={() => HandleClick(value)}
            className={`row_poster  ${LargeRow && "row_posterLarge"}`}
            src={`${baseURL}${value?.poster_path}`}
          />
        ))}
      </div>
      {trailerUrl && <Youtube  videoId={trailerUrl}  opts={opts}/>}
    </div>
  );
};
