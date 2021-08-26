import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CommentItem = styled.div`
  border-top: 1px solid #f5f5f5;
  padding: 24px 0px;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CommentProfileImg = styled.div`
  width: 54px;
  height: 54px;
  border: 1px solid #000;
  border-radius: 100%;
`;
const CommentInfo = styled.div`
  margin-left: 16px;
`;
const Name = styled.div`
  font-weight: 800;
`;
const Date = styled.div`
  font-size: 14px;
  color: #868e96;
  margin-top: 8px;
`;

const Comment = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 18px 0px;
`;

const CommentComponent = styled.div`
  box-sizing: border-box;
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function CommentOutput(props) {
  const commentState = useSelector(state => state.commentState.state);
  const [commentListItem, setCommentListItem] = useState([]);

  const commentList = commentState.comment[props.index];
  const exampleDate = "2018년 11월 29일";
  useEffect(() => {
    if (commentList !== undefined) {
      setCommentListItem(
        commentList.map(list => {
          return (
            <CommentItem>
              <CommentHeader>
                <CommentProfileImg />
                <CommentInfo>
                  <Name>{list.user}</Name>
                  <Date>{exampleDate}</Date>
                </CommentInfo>
              </CommentHeader>

              <Comment>{list.comment}</Comment>
            </CommentItem>
          );
        })
      );
    }
  }, [commentList]);
  return <CommentComponent>{commentListItem}</CommentComponent>;
}
