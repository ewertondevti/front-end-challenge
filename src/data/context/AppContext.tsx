import React, { createContext, useState } from "react";
import {
  EditDataType,
  ICommentParams,
  ICommentType,
  KeyType,
  PostType,
} from "../types";

interface IProps {
  currentKey: string;
  postsData: PostType[];
  commentsData: ICommentType[];
  currentPost?: PostType;
  editData: EditDataType;
  changeCurrentKey: (currentKey: string) => void;
  getPosts: () => void;
  getPostById: (postId: number) => void;
  getComments: (postId: number) => void;
  addComment: (commentData: ICommentParams) => void;
  updateComment: (updatedComment: ICommentParams) => void;
  updateEditData: (editData: EditDataType) => void;
}

const initialState: IProps = {
  currentKey: KeyType.None,
  postsData: [],
  commentsData: [],
  currentPost: undefined,
  editData: { id: 0, isEdit: false },
  changeCurrentKey: () => {},
  getPosts: () => {},
  getPostById: () => {},
  getComments: () => {},
  addComment: () => {},
  updateComment: () => {},
  updateEditData: () => {},
};

export const AppContext = createContext<IProps>(initialState);

const ENDPOINT = "http://localhost:9000";

const AppProvider: React.FC = ({ children }) => {
  const [currentKey, setCurrentKey] = useState(initialState.currentKey);
  const [postsData, setPostsData] = useState(initialState.postsData);
  const [commentsData, setcommentsData] = useState(initialState.commentsData);
  const [currentPost, setCurrentPost] = useState(initialState.currentPost);
  const [editData, setEditData] = useState(initialState.editData);

  const updateEditData = (editData: EditDataType) => setEditData(editData);
  const changeCurrentKey = (currentKey: string) => setCurrentKey(currentKey);

  const getPosts = () => {
    fetch(`${ENDPOINT}/posts`, { method: "GET" })
      .then((response) => response.json())
      .then((result: PostType[]) => setPostsData(result))
      .catch((error) => console.error(error));
  };

  const getPostById = (postId: number) => {
    fetch(`${ENDPOINT}/posts/${postId}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => setCurrentPost(result))
      .catch((error) => console.error(error));
  };

  const getComments = (postId: number) => {
    fetch(`${ENDPOINT}/posts/${postId}/comments`, { method: "GET" })
      .then((response) => response.json())
      .then((result: ICommentType[]) => setcommentsData(result))
      .catch((error) => console.error(error));
  };

  const addComment = (commentData: ICommentParams) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch(`${ENDPOINT}/posts/${commentData.postId}/comments`, {
      method: "POST",
      headers,
      body: JSON.stringify(commentData),
    })
      .then(() => getComments(commentData.postId))
      .catch((error) => console.error(error));
  };

  const updateComment = (updatedComment: ICommentParams) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch(`${ENDPOINT}/comments/${updatedComment.id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(updatedComment),
    })
      .then(() => getComments(updatedComment.postId))
      .catch((error) => console.error(error));
  };

  return (
    <AppContext.Provider
      value={{
        currentKey,
        postsData,
        commentsData,
        currentPost,
        editData,
        changeCurrentKey,
        getPosts,
        getPostById,
        getComments,
        addComment,
        updateComment,
        updateEditData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
