import CommentInputContainer from "./CommentInputContainer";
import { CommentOutput } from "./CommentOutput";

export function Comment(props) {
  const index = props.match.params.index;
  console.log(index);
  return (
    <div>
      <CommentInputContainer index={index} />
      <CommentOutput />
    </div>
  );
}
