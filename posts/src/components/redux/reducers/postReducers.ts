import { ACTIONS } from "../constants";

export interface IPost {
  title: string;
  body: string;
  userId: string;
  author: string;
}

export interface IPostState {
  posts: IPost[];
}

const defaultState: IPostState = {
  posts: [],
};

export const postsReducers = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POST) {
    return {
      ...state,
      posts: action.posts,
    };
  }

  return state;
};
