import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

import ContentWrap from "../../../components/ContentWrap/ContentWrap";
import Img from "../../../components/lazyLoadImg/Img";
import avatar from "../../../assets/Moviex-images/avatar.png";
import { Card, Carousel } from "antd";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <div className="sectionHeading">Top Cast</div>
      {!loading ? (
        <div className="listItems">
          {data?.map((item) => {
            let imgUrl = item.profile_path
              ? url.profile + item.profile_path
              : avatar;
            return (
              <Carousel autoplay>
                <Card
                  style={{
                    boxShadow: " 0 2px 8px rgba(0,0,0,.1)",
                  }}
                >
                  <div key={item.id} className="listItem">
                    <div className="profileImg">
                      <Img src={imgUrl} />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="character">{item.character}</div>
                  </div>
                </Card>
              </Carousel>
            );
          })}
        </div>
      ) : (
        <div className="castSkeleton">
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
          {skeleton()}
        </div>
      )}
    </div>
  );
};

export default Cast;
