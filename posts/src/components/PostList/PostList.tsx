import { useEffect, useState } from 'react';
import { Post } from '../Post/Post';
import styles from './PostList.module.css';

export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((item: { title: string; body: string }, index) => {
        return <Post key={index} title={item.title} body={item.body} />;
      })}
    </div>
  );
};
