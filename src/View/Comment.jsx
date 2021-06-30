import { useEffect, useState } from "react";
import styled from "styled-components";

const CommentComponent = styled.div`
  width: 980px;
  margin: auto;
`;

export function Comment(props) {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [commentListItem, setCommentListItem] = useState([]);

  const Confirm = () => {
    setCommentList(commentList.concat([comment]));
    setComment("");
  };

  useEffect(() => {
    setCommentListItem(
      commentList.map(list => {
        return <div>{list}</div>;
      })
    );
  }, [commentList]);
  return (
    <CommentComponent>
      {commentListItem}
      <input
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button onClick={Confirm}>confirm</button>
    </CommentComponent>
  );
}
