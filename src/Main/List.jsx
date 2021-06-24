import React from "react";
import { Link } from "react-router-dom";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../posts", false, /\.md$/)
).map(file => file.default.slice(14).split(".")[0]);

let index = 0;
const ListItem = markdownFiles.map(listTitle => {
  const item = (
    <Link to={`/view/${index}`}>
      <li key={index}>{listTitle}</li>
    </Link>
  );
  index++;
  return item;
});

export function List(props) {
  console.log(markdownFiles);
  return <ul>{ListItem}</ul>;
}
