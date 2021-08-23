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
  const [commentListItem, setCommentListItem] = useState([]);

  const commentState = useSelector(state => state.commentState.state.comment);
  const commentList = commentState[props.index];
  console.log(commentState);

  useEffect(() => {
    if (commentList != undefined) {
      setCommentListItem(
        commentList.map(list => {
          return (
            <CommentItem>
              {list.user}: {list.comment}
            </CommentItem>
          );
        })
      );
    }
  }, [commentList]);
  return <CommentComponent>{commentListItem}</CommentComponent>;
}
