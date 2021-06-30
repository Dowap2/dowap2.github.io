import { useState } from "react";
import styled from "styled-components";

const CommentComponent = styled.div`
  width: 980px;
  margin: auto;
`;

export function Comment(props) {
  const [comment, setComment] = useState("");
  return (
    <CommentComponent>
      <input
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <button>ok</button>
    </CommentComponent>
  );
}
