import { List } from "./List/List";
import TabContainer from "./Tab/TabContainer";

export function MainComponent() {
  console.log("main");
  return (
    <div>
      <TabContainer />
      <List />
    </div>
  );
}
