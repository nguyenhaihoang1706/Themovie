import React from "react";
import "./style.scss";
import DetailsBanner from "./DetailBanner";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import VideosSection from "./VideoSection";
import Similar from "./Carousel/Similar";
import Recomment from "./Carousel/Recomment";

const Detail = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: createLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log(mediaType);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={createLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recomment mediaType={mediaType} id={id} />
    </div>
  );
};

export default Detail;
