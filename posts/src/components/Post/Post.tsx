import styles from "./Post.module.css";

export interface IPost {
  title: string;
  body: string;
  userId: string;
  author: string;
  onClick: () => void;
}

export const Post = ({ title, body, author, userId, onClick }: IPost) => {
  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.author}>
        <p>{author}</p>
      </div>
    </div>
  );
};
