import React from "react";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../posts", false, /\.md$/)
).map(file => file.default.slice(14).split(".")[0]);

export function List(props) {
  console.log(markdownFiles);
  return <div>list</div>;
}
