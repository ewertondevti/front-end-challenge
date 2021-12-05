import { ReactNode } from "react";

export enum KeyType {
  None = "",
  Posts = "posts",
  AboutMe = "aboutMe",
}

export type PostType = {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: string;
  commentsQnty?: number;
};

export interface ICommentType {
  id: number;
  postId: number;
  parent_id: number | null;
  user: string;
  date: string;
  content: string;
}

export type CommentModelType = {
  id: number;
  parentId: number | null;
  postId: number;
  actions: ReactNode[];
  author: string;
  avatar: string;
  content: ReactNode;
  datetime: ReactNode;
  children: CommentModelType[];
};

export interface ICommentParams {
  id?: number;
  postId: number;
  parent_id: number | null;
  user: string;
  date: string;
  content: ReactNode;
}

export type EditDataType = {
  id: number;
  isEdit: boolean;
};
