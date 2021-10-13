import { useEffect, useState } from "react";
import styled from "styled-components";

const CommentItem = styled.div``;

const CommentComponent = styled.div`
  box-sizing: border-box;
  width: 980px;
  margin: auto;
  border: 1px solid #f1f1f1;
  padding: 20px;
`;

const CommentInputComponent = styled.div`
  width: 980px;
  margin: auto;
`;

export function Comment(props) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [commentListItem, setCommentListItem] = useState([]);

  const Confirm = () => {
    if (userName === "" || password === "") {
      alert("user, password is null");
    } else {
      setCommentList(
        commentList.concat([{ user: userName, comment: comment }])
      );
      setComment("");
      setUserName("");
      setPassword("");
    }
  };

  useEffect(() => {
    setCommentListItem(
      commentList.map(list => {
        return (
          <CommentItem>
            {list.user}: {list.comment}
          </CommentItem>
        );
      })
    );
  }, [commentList]);
  return (
    <div>
      <CommentComponent>{commentListItem}</CommentComponent>
      <CommentInputComponent>
        <input
          type="text"
          placeholder="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <input
          type="text"
          placeholder="user"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={Confirm}>confirm</button>
      </CommentInputComponent>
    </div>
  );
}
