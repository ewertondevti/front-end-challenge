import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import useAppData from "../../../data/hooks/useAppData";
import styles from "../BodyContent.module.scss";
import PostCard from "../PostCard/PostCard";

const AllPosts = () => {
  const { postId } = useParams();
  const { postsData, getPosts } = useAppData();

  useEffect(() => {
    getPosts();
  }, []);

  if (postId) return <Outlet />;

  return (
    <div className={styles.content}>
      {postsData.map((post) => (
        <PostCard key={post.id + post.author} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
