import { UserOutlined } from "@ant-design/icons";
import { Comment, Form, Input } from "antd";
import moment from "moment";
import { useState } from "react";
import useAppData from "../../data/hooks/useAppData";
import { ICommentParams } from "../../data/types";
import { Buttons } from "../../utils";

interface IProps {
  postId: number;
  parentId?: number;
  width?: number | string;
  onCancel: () => void;
}

const { TextArea } = Input;
const { Item } = Form;

const Reply = ({ postId, parentId, width, onCancel }: IProps) => {
  const [commentedBy, setCommentedBy] = useState("");
  const [comment, setComment] = useState("");

  const { commentsData, addComment } = useAppData();

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setComment(e.target.value);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCommentedBy(e.target.value);

  const onSubmit = () => {
    const newCommentData: ICommentParams = {
      postId,
      parent_id: parentId ?? null,
      user: commentedBy,
      date: moment().format("YYYY-MM-DD"),
      content: comment,
    };

    addComment(newCommentData);
    onCancel();
  };

  return (
    <Comment
      avatar={`https://joeschmoe.io/api/v1/${commentsData.length}`}
      style={{ width: width ?? "40%" }}
      content={
        <>
          <Item>
            <Input
              placeholder="Enter your name"
              onChange={onChangeName}
              value={commentedBy}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Item>
          <Item>
            <TextArea rows={4} onChange={onChangeComment} value={comment} />
          </Item>
          <Item>
            <Buttons onCancel={onCancel} onSubmit={onSubmit} />
          </Item>
        </>
      }
    />
  );
};

export default Reply;
