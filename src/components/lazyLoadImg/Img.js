import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      style={{ width: "100%", height: "100%" }}
      className={className || ""}
      alt=""
      effect="blur"
      src={src}
    />
  );
};

export default Img;
