import React, { useEffect, useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { Skeleton } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="card">
          <Skeleton
            style={{ backgroundColor: "white", width: "100%", height: "100%" }}
            active
            width={300}
            paragraph={{ rows: 4, width: [500, 500, 500, 100] }}
          ></Skeleton>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <img
              className="card__img"
              src={`https://image.tmdb.org/t/p/original${
                movie ? movie.poster_path : ""
              }`}
            />
            <div className="card__overlay">
              <div className="card__title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card__runtime">
                {movie ? movie.release_date : ""}
                <span className="card__rating">
                  {movie ? movie.release_average : ""}
                  <FontAwesomeIcon
                    icon={faStar}
                    beat
                    style={{ marginLeft: 10, color: "#ffec70" }}
                  />
                </span>
              </div>
              <div className="card__description   ">
                {/* {movie ? movie.overview.splice(0, 118) + "..." : ""} */}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Card;
