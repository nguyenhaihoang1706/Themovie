import React, { useEffect, useState } from "react";
import "./style.scss";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import MovieList from "../../components/MovieList";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import ProgressRating from "./Progress";
import FooterLinks from "../../components/Footer";
import TopRate from "./TopRate";

function Home() {
  const [popularMovie, setPopularMovie] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=e4dd5cfb3ee4eb5f2effb2545ac280b7"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setPopularMovie(data.results));
  // }, []);
  return (
    <>
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRate/>
        <ProgressRating />
        <FooterLinks />
      </div>
    </>
  );
}

export default Home;
