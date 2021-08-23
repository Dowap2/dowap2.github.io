import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentItem = styled.div``;

const CommentComponent = styled.div`
  box-sizing: border-box;
  width: 980px;
  margin: auto;
  border: 1px solid #f1f1f1;
  padding: 20px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
export function CommentOutput(props) {
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
  const example = useSelector(state => state.commentState.state);

  useEffect(() => {
    setCommentListItem(
      commentList.map(list => {
        return (
          <CommentItem>
            <button onClick={e => console.log(example)}></button>
            {list.user}: {list.comment}
          </CommentItem>
        );
      })
    );
  }, [commentList]);
  return <CommentComponent>{commentListItem}</CommentComponent>;
}
