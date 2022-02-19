import { useEffect, useState } from "react";
import { Post } from "../Post/Post";
import styles from "./PostList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../redux/store";
import { addPosts } from "../redux/actions/postActions";
import { IPost } from "../redux/reducers/postReducers";

const POST_PER_PAGE = 5;

export const PostList = () => {
  const posts = useSelector((state: IState) => state.postsReducers.posts);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
        response.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
        response.json()
      ),
    ]).then((result) => {
      const [posts, authors] = result;

      const newPost = posts.map((post: IPost) => {
        const authorId = post.userId;

        const author = authors.find(
          (author: { id: string }) => author.id === authorId
        );
        return { ...post, author: author.name };
      });

      dispatch(addPosts(newPost));
    });
  }, []);

  const postsSlised = posts.slice(0, POST_PER_PAGE * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>
      {postsSlised.map((item: IPost, index) => {
        return (
          <Post
            key={index}
            userId={item.userId}
            title={item.title}
            body={item.body}
            author={item.author}
            onClick={showMore}
          />
        );
      })}

      <button onClick={showMore}>Show More</button>
    </div>
  );
};
