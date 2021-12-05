import { Comment } from "antd";
import useAppData from "../../../../data/hooks/useAppData";
import { CommentModelType } from "../../../../data/types";
import { Content } from "../../../../utils";
import ActionButtons from "../../../ActionButtons/ActionButtons";

interface IProps {
  item: CommentModelType;
}

const CommentItem = ({ item }: IProps) => {
  const { editData } = useAppData();

  const checkEditData = (id: number) => {
    if (editData.isEdit && id === editData.id) {
      return [];
    }

    return [<ActionButtons id={id} postId={item.postId} />];
  };

  const getContent = (comment: CommentModelType) => {
    return (
      <Content
        comment={comment}
        key={comment.id + (comment.datetime as string) + comment.author}
      />
    );
  };

  const renderItem = (childItem: CommentModelType) => {
    return (
      <Comment
        actions={checkEditData(childItem.id)}
        author={childItem.author}
        avatar={childItem.avatar}
        content={getContent(childItem)}
        datetime={childItem.datetime}
        key={childItem.id + childItem.author + childItem.content}
      >
        {!!childItem.children.length &&
          childItem.children.map((child) => renderItem(child))}
      </Comment>
    );
  };

  return (
    <>
      <li key={item.id + item.author}>
        <Comment
          actions={checkEditData(item.id)}
          author={item.author}
          avatar={item.avatar}
          content={getContent(item)}
          datetime={item.datetime}
        >
          {!!item.children.length &&
            item.children.map((child) => renderItem(child))}
        </Comment>
      </li>
    </>
  );
};

export default CommentItem;
