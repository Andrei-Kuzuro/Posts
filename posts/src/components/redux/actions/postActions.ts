import { IPostState } from "../reducers/postReducers";
import { ACTIONS } from "../constants";

export const addPosts = (posts: IPostState) => {
  return {
    type: ACTIONS.ADD_POST,
    posts: posts,
  };
};
