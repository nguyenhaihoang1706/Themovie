import React from "react";
import dayjs from "dayjs";
import "./style.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PosterFallBack from "../../assets/Moviex-images/no-poster.png";
import Img from "../../components/lazyLoadImg/Img";
import Rating from "../../components/Rating";
import Genres from "../../components/Genres";
const MovieCard = ({ data, formSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallBack;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType} /${data.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        {!formSearch && (
          <>
            <Rating rating={data.vote_average.toFixed(1) * 10} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
