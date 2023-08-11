import React, { useEffect, useState } from "react";
import "./style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import noResult from "../../assets/Moviex-images/no-results.png";
import { fetchDataFromApi } from "../../utils/api";
import { Spin } from "antd";
import ContentWrap from "../../components/ContentWrap/ContentWrap";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import MovieCard from "../../components/MovieCard/MovieCard";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoadings] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoadings(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoadings(false);
      }
    );
  };

  const fetchNextPage = () => {
    fetchDataFromApi(`search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({ ...data, results: [...data?.results, ...res?.results] });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spin delay={3000} indicator={antIcon} />}
      {!loading && (
        <ContentWrap>
          {data?.results ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data.total_results > 1 ? "results" : "results"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPage}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spin indicator={antIcon} />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, Results not found</span>
          )}
        </ContentWrap>
      )}
    </div>
  );
};

export default SearchResult;
