import React from "react";
import "./style.scss";
import { Progress } from 'antd';
import ContentWrap from "../../../components/ContentWrap/ContentWrap";

const ProgressRating = () => {
  return (
    <div className="column_wrapper">
      <div className="column_wrapper wrap">
        <div className="column">
          <ContentWrap>
             <div className="column_header">
            <h2>Leaderboard</h2>
            <div>
              <p>
                <span className="dot all"></span>All Time Edits
              </p>
              <p>
                <span className="dot this_week"> </span>Edits This Week
              </p>
                  <Progress percent={30} />
                  <Progress percent={50} status="active" />
                  <Progress percent={70} status="exception" />
                  <Progress percent={100} />
                  <Progress percent={50} showInfo={false} />
            </div>
          </div>
          </ContentWrap>
         
        </div>
      </div>
    </div>
  );
};

export default ProgressRating;
