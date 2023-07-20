import Card from "../Card";
import "./MovieList.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MoiveList() {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    return fetch(
      `https://api.themoviedb.org/3/movies/${
        type ? type : "popular"
      }?api_key=e4dd5cfb3ee4eb5f2effb2545ac280b7`
    )
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((err) => {
        alert(`Can not fetch data!`);
        console.log(err);
      });
  };
  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__card">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoiveList;
