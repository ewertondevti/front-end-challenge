import { List } from "antd";
import useGetDataFormatted from "../../../data/hooks/useGetDataFormatted";
import styles from "../BodyContent.module.scss";
import CommentItem from "./CommentItem/CommentItem";

const AllComments = () => {
  const data = useGetDataFormatted();

  return (
    <div className={styles.commentContent}>
      <List
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => <CommentItem item={item} />}
      />
    </div>
  );
};

export default AllComments;
