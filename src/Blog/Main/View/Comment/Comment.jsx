import CommentInputContainer from "./CommentInputContainer";
import CommentOutputContainer from "./CommentOutputContainer";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const CommentComponent = styled.div`
  margin-top: 50px;
`;

export function Comment(props) {
  const { index } = useParams();
  console.log(index);
  return (
    <CommentComponent>
      <CommentInputContainer index={index} />
      <CommentOutputContainer index={index} />
    </CommentComponent>
  );
}
