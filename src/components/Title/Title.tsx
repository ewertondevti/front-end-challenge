import styles from "./Title.module.scss";

interface IProps {
  title: string;
  author: string;
  publishedDate: string;
}

const Title = ({ title, author, publishedDate }: IProps) => {
  return (
    <div className={styles.content}>
      <h3>{title}</h3>
      <h6>{author}</h6>
      <h6>{publishedDate}</h6>
    </div>
  );
};

export default Title;
