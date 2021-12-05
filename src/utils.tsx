import { Button, Input, Tooltip } from "antd";
import moment from "moment";
import { ChangeEvent, useState } from "react";
import useAppData from "./data/hooks/useAppData";
import { CommentModelType, ICommentParams } from "./data/types";

interface IProps {
  onClick: (id?: number) => void;
}

interface IReplyActionProps extends IProps {
  parentId: number;
}

export const ReplyAction = ({ parentId, onClick }: IReplyActionProps) => {
  return (
    <Button
      type="text"
      key={`comment-list-reply-to-${parentId}`}
      style={{ marginRight: 20 }}
      onClick={() => onClick()}
    >
      Reply
    </Button>
  );
};

interface IEditActionProps {
  id: number;
  editHandler: () => void;
}

export const EditAction = ({ id, editHandler }: IEditActionProps) => {
  return (
    <Button type="text" key={`comment-list-edit-${id}`} onClick={editHandler}>
      Edit
    </Button>
  );
};

export const getDatetime = (datetime: string) => (
  <Tooltip title={moment(datetime).format("MM-DD-YYYY")}>
    <span>{moment(datetime).fromNow()}</span>
  </Tooltip>
);

export const getAvatarUrl = (id: number) => `https://joeschmoe.io/api/v1/${id}`;

interface IContentProps {
  comment: CommentModelType;
}

interface IButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export const Buttons = ({ onCancel, onSubmit }: IButtonsProps) => {
  return (
    <>
      <Button onClick={onCancel} style={{ marginRight: 10 }}>
        Cancel
      </Button>
      <Button htmlType="submit" onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </>
  );
};

export const Content = ({ comment }: IContentProps) => {
  const { content, postId, id, author, parentId } = comment;
  const [updatedComment, setUpdatedComment] = useState(content as string);

  const { editData, updateComment, updateEditData } = useAppData();

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setUpdatedComment(e.target.value);

  const onSubmit = () => {
    const newCommentData: ICommentParams = {
      id,
      postId,
      parent_id: parentId,
      user: author,
      date: moment().format("YYYY-MM-DD"),
      content: updatedComment,
    };

    updateComment(newCommentData);
    onCancel();
  };

  const onCancel = () => updateEditData({ id: 0, isEdit: false });

  if (editData.isEdit && comment.id === editData.id) {
    return (
      <div>
        <Input.TextArea rows={4} value={updatedComment} onChange={onChange} />
        <div className="buttonsContent">
          <Buttons onCancel={onCancel} onSubmit={onSubmit} />
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export const getChildren = (id: number, commentsData: CommentModelType[]) =>
  commentsData.filter((comment) => comment.parentId === id);
