import { MessageOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostType } from "../../../data/types";
import Reply from "../../Reply/Reply";
import Title from "../../Title/Title";
import styles from "../BodyContent.module.scss";

const { Meta } = Card;

interface IProps {
  post: PostType;
  width?: string | number;
}

const PostCard = ({ post, width }: IProps) => {
  const [showCommentInput, setShowCommentInput] = useState(false);

  let navigate = useNavigate();

  const description = (
    <div className={styles.description}>
      <span>{post.description}</span>
    </div>
  );

  const avatar = (
    <div className={styles.image}>
      <img
        src={`https://joeschmoe.io/api/v1/${post.author}`}
        alt={`avatar${post.id}`}
      />
    </div>
  );

  const commentHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowCommentInput(true);
  };

  const addComment = (
    <div className={styles.addCommentButton} onClick={commentHandler}>
      <MessageOutlined key="comment" />
      <span style={{ marginLeft: 10 }}>Comment</span>
    </div>
  );

  const actions = [addComment];

  const onCancel = () => setShowCommentInput(false);

  return (
    <>
      <Card
        onClick={() => navigate(`${post.id}`)}
        hoverable
        style={{ width: width ?? "40%", marginBottom: 50 }}
        actions={actions}
        cover={
          <div
            style={{ padding: 20 }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        }
      >
        <Meta
          avatar={avatar}
          title={
            <Title
              title={post.title}
              author={post.author}
              publishedDate={post.publish_date}
            />
          }
          description={description}
        />
      </Card>

      {showCommentInput && <Reply postId={post.id} onCancel={onCancel} />}
    </>
  );
};

export default PostCard;
