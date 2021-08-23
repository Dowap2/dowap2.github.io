import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentInputComponent = styled.div`
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function CommentInput(props) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const commentState = useSelector(state => state.commentState.state.comment);
  const index = props.index;

  const Confirm = () => {
    if (userName === "" || password === "") {
      alert("user, password is null");
    } else {
      const key = index;
      const obj = {};
      const commentList =
        commentState[props.index] === undefined
          ? [{ user: userName, comment: comment }]
          : commentState[props.index].concat([
              {
                user: userName,
                comment: comment
              }
            ]);
      obj[key] = commentList;
      props.onChange(obj);
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
