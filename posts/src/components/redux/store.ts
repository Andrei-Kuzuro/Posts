import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IPostState, postsReducers } from "./reducers/postReducers";

export interface IState {
  postsReducers: IPostState;
}

export const store = createStore(
  combineReducers({ postsReducers }),
  composeWithDevTools()
);
