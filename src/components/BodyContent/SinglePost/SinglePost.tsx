import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAppData from "../../../data/hooks/useAppData";
import AllComments from "../AllComments/AllComments";
import styles from "../BodyContent.module.scss";
import PostCard from "../PostCard/PostCard";

const SinglePost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { currentPost, commentsData, getPostById, getComments } = useAppData();

  useEffect(() => {
    if (postId) {
      const id = Number(postId);
      getPostById(id);
      getComments(id);
    }
  }, [postId]);

  if (!currentPost) return <></>;

  return (
    <div className={styles.content}>
      <div className={styles.navigation}>
        <Button type="link" onClick={() => navigate(-1)}>
          All Posts
        </Button>
      </div>

      <div className={styles.postContent}>
        <PostCard post={currentPost} width="80%" />

        {!!commentsData.length && <AllComments />}
      </div>
    </div>
  );
};

export default SinglePost;
