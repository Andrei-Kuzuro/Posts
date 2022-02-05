import { useEffect, useState } from "react";
import { IProps, Post } from "../Post/Post";
import styles from "./PostList.module.css";

const POST_PER_PAGE = 5;

export const PostList = () => {
  const [posts, setPosts] = useState([]);

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

      const newPost = posts.map((post: IProps) => {
        const authorId = post.userId;

        const author = authors.find(
          (author: { id: string }) => author.id === authorId
        );
        return { ...post, author: author.name };
      });

      setPosts(newPost);
    });
  }, []);

  const postsSlised = posts.slice(0, POST_PER_PAGE * page);

  const showMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={styles.container}>
      {postsSlised.map((item: IProps, index) => {
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
