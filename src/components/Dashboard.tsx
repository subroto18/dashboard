import React, { useEffect, useReducer } from "react";
import { Summary } from "./Summary";
import { PostChart } from "./PostChart";
import { UserTable } from "./UserTable";
import {
  dashboardReducer,
  initialState,
  ActionKind,
} from "../utilis/DashBoardReducer";

export const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    getTotalUser();
    getTotalPost();
    getTotalComments();
    getTotalAlbum();
    getAllUserWithNumOfPost();
  }, []);

  const getTotalUser = async () => {
    dispatch({ type: ActionKind.USER_API_LOADING, payload: true }); // start loading
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await data.json();
      dispatch({
        type: ActionKind.USER_API_SUCCESS,
        payload: {
          allUsers: users,
          num_of_users: users.length,
        },
      }); // set success data into state
    } catch (error) {
      dispatch({ type: ActionKind.USER_API_FAILED, payload: true }); // set failed data into state
    }
  };

  const getTotalPost = async () => {
    dispatch({ type: ActionKind.POST_API_LOADING, payload: true }); // start loading
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await data.json();
      dispatch({ type: ActionKind.POST_API_SUCCESS, payload: posts.length }); // set success data into state
    } catch (error) {
      dispatch({ type: ActionKind.POST_API_FAILED, payload: true }); // set failed data into state
    }
  };

  const getTotalComments = async () => {
    dispatch({ type: ActionKind.COMMETS_API_LOADING, payload: true }); // start loading
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/Comments");
      let posts = await data.json();
      dispatch({
        type: ActionKind.COMMENTS_API_SUCCESS,
        payload: posts.length,
      }); // set success data into state
    } catch (error) {
      dispatch({ type: ActionKind.COMMETS_API_FAILED, payload: true }); // set failed data into state
    }
  };

  const getTotalAlbum = async () => {
    dispatch({ type: ActionKind.ALBUMS_API_LOADING, payload: true }); // start loading
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/albums");
      let posts = await data.json();
      dispatch({
        type: ActionKind.ALBUMS_API_SUCCESS,
        payload: posts.length,
      }); // set success data into state
    } catch (error) {
      dispatch({ type: ActionKind.ALBUMS_API_FAILED, payload: true }); // set failed data into state
    }
  };

  const getAllUserWithNumOfPost = async () => {
    dispatch({ type: ActionKind.USER_WITH_POST_LOADING, payload: true }); // start loading
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await data.json();

      let post_user_data: any = [];

      if (Boolean(users.length > 0)) {
        let user_with_num_of_post = users.map(async (userData: any) => {
          let userId = userData.id;

          let num_of_post = await getPostByUserId(userId);

          return {
            id: userId,
            name: userData.name,
            num_of_post: num_of_post,
          };
        });

        let user_data_with_post = await Promise.all(user_with_num_of_post);

        dispatch({
          type: ActionKind.USER_API_WITH_POST_SUCCESS,
          payload: user_data_with_post,
        }); // start loading
      }
    } catch (error) {
      dispatch({ type: ActionKind.USER_API_WITH_POST_FAILED, payload: true }); // set failed data into state
    }
  };

  const getPostByUserId = async (id: number) => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      let posts = await data.json();

      return posts.length;
    } catch (error) {
      return null;
    }
  };

  return (
    <div className="grid w-11 mx-auto mt-5">
      <div className="col-6">
        <Summary data={state} />
      </div>
      <div className="col-6">
        <PostChart data={state} />
      </div>

      <div className="col-12">
        <UserTable data={state} />
      </div>
    </div>
  );
};
