import React, { useEffect, useState } from "react";
import "./Home.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e4dd5cfb3ee4eb5f2effb2545ac280b7"
    )
      .then((response) => response.json())
      .then((data) => setPopularMovie(data.results));
  }, []);
  return (
    <>
      <div className="poster">
        <OwlCarousel
          items="1"
          autoPlay
          className="owl-theme"
          loop
          margin={10}
          nav
          lazyLoad
        >
          {popularMovie.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="item posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                    <FontAwesomeIcon
                      icon={faStar}
                      beat
                      style={{ marginLeft: 10, color: "#ffec70" }}
                    />
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default Home;
