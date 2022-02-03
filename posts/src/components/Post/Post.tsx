import styles from './post.module.css';
interface IPops {
  title: string;
  body: string;
}

export const Post = ({ title, body }: IPops) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
