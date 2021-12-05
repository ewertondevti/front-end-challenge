import { useCallback } from "react";
import { useState } from "react";
import useAppData from "../../data/hooks/useAppData";
import { EditAction, ReplyAction } from "../../utils";
import Reply from "../Reply/Reply";

interface IProps {
  id: number;
  postId: number;
}

const ActionButtons = ({ id, postId }: IProps) => {
  const [showReply, setShowReply] = useState(false);
  const [updateId, setUpdateId] = useState(0);

  const { updateEditData } = useAppData();

  const onClick = () => {
    setShowReply(true);
    if (id) setUpdateId(id);
  };

  const editHandler = useCallback(() => {
    updateEditData({ id, isEdit: true });
  }, [id, updateEditData]);

  const onCancel = () => setShowReply(false);

  return (
    <div style={{ width: "100%" }}>
      <ReplyAction parentId={id} onClick={onClick} />

      <EditAction id={id} editHandler={editHandler} />

      {showReply && (
        <Reply
          updateId={updateId}
          parentId={id}
          postId={postId}
          onCancel={onCancel}
          width="100%"
        />
      )}
    </div>
  );
};

export default ActionButtons;
