import { View } from "./View";
import { Comment } from "./Comment";

export function ViewComponent({ match }) {
  return (
    <div>
      <View match={match} />
      <Comment />
    </div>
  );
}
