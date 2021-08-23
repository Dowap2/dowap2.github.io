import { useState } from "react";
import styled from "styled-components";

const CommentInputComponent = styled.div`
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function Comment(props) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [commentList, setCommentList] = useState([]);

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

  return (
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
  );
}
