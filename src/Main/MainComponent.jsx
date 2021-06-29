import { List } from "./List";
import { SlideBanner } from "./SlideBanner";

export function MainComponent(props) {
  return (
    <div>
      <SlideBanner />
      <List />
    </div>
  );
}
