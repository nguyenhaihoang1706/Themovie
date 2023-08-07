import React, { useState } from "react";
import "./style.scss";
import ContentWrap from "../../../components/ContentWrap/ContentWrap";
import SwitchTab from "../../../components/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel";

const TopRate = () => {
  const [endpoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Top Rate</span>
        <SwitchTab data={["Movie", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRate;
