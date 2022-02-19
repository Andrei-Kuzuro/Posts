import React from "react";
import "./App.css";
import { PostList } from "./components/PostList/PostList";
import { Provider } from "react-redux";
import { store } from "./components/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostList />
      </Provider>
    </div>
  );
}

export default App;
