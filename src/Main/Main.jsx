import React from "react";
import { List } from "./List";
import { WriteButton } from "./WriteButton";

export function Main(props) {
  return (
    <div>
      <WriteButton />
      <List />
    </div>
  );
}
