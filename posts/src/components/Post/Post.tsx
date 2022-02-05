import styles from "./Post.module.css";

export interface IProps {
  title: string;
  body: string;
  userId: string;
  author: string;
  onClick: () => void;
}

export const Post = ({ title, body, author, userId, onClick }: IProps) => {
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
