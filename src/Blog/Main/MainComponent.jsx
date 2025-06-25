import { Suspense } from "react";
import { List } from "./List/List";

export function MainComponent() {
  return (
    <Suspense fallback={<div>불러오는 중...</div>}>
      <List />
    </Suspense>
  );
}
