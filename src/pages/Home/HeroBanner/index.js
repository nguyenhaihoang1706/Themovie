import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImg/Img";
import ContentWrap from "../../../components/ContentWrap/ContentWrap";

const HeroBanner = () => {
  const [background, setBackGround] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackGround(bg);
  }, [data]);

  const searchQueryHandle = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop_img">
          <Img style={{ width: "100%" }} src={background} />
        </div>
      )}
      <ContentWrap>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome. </span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>
            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandle}
                type="text"
                placeholder="Search for a movie tv show..."
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};

export default HeroBanner;
