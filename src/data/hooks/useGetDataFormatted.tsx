import { useCallback } from "react";
import { getAvatarUrl, getChildren, getDatetime } from "../../utils";
import { CommentModelType } from "../types";
import useAppData from "./useAppData";

export const useGetDataFormatted = () => {
  const { commentsData } = useAppData();

  const getDataFormatted = useCallback(() => {
    let formattedData = commentsData.map(
      (comment): CommentModelType => ({
        id: comment.id,
        parentId: comment.parent_id,
        postId: comment.postId,
        actions: [],
        author: comment.user,
        avatar: getAvatarUrl(comment.id),
        content: comment.content,
        datetime: getDatetime(comment.date),
        children: [],
      })
    );

    formattedData.forEach((comment) => {
      const newChildren = getChildren(comment.id, formattedData);
      comment.children = newChildren;
    });

    return formattedData.filter((comment) => !comment.parentId);
  }, [commentsData]);

  return getDataFormatted();
};

export default useGetDataFormatted;
