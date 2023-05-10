import React, { useEffect, useReducer } from "react";
import style from "../styles/summary.module.css"; // CSS Module enabled
import { SummaryCard } from "./SummaryCard";

interface Props {
  data: any;
}

export const Summary = (props: Props) => {
  return (
    <div className="grid">
      <div className="col-12  md:col-6 sm:col-12 ">
        <SummaryCard
          title="Number of Users"
          num_of_count={props.data.numOfUsers}
          month="In This Month"
          backgroundColor="bg-blue-400"
          loading={props.data.userDataLoading}
          apiError={props.data.userApirror}
        />
      </div>
      <div className="col-12  md:col-6 sm:col-12">
        <SummaryCard
          title="Number of Posts"
          num_of_count={props.data.numOfPosts}
          month="In This Month"
          backgroundColor="bg-blue-400"
          loading={props.data.postDataLoading}
          apiError={props.data.postApirror}
        />
      </div>
      <div className="col-12  md:col-6 sm:col-12">
        <SummaryCard
          title="Number of Comments"
          num_of_count={props.data.numOfComments}
          month="In This Month"
          backgroundColor="bg-blue-400"
          loading={props.data.commentsDataLoading}
          apiError={props.data.commentsApirror}
        />
      </div>
      <div className="col-12  md:col-6 sm:col-12">
        <SummaryCard
          title="Number of Albums"
          num_of_count={props.data.numOfAlbums}
          month="In This Month"
          backgroundColor="bg-blue-400"
          loading={props.data.albumsDataLoading}
          apiError={props.data.albumsApirror}
        />
      </div>
    </div>
  );
};
