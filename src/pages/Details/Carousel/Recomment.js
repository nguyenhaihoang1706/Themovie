import React from "react";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "antd";

const Recomment = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
  return (
    <div>
      <Carousel
        title={title}
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Recomment;
