import React, { useEffect, useState } from "react";
import "./style.scss";
import ContentWrap from "../../../components/ContentWrap/ContentWrap";
import SwitchTab from "../../../components/SwitchTab";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel";

const Trending = () => {
  const [endpoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Trending</span>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
