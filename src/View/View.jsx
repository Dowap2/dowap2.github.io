import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import theTextFile from "../Blog_md/moment.md";

export function View(props) {
  const [postMarkdown, setPostMarkdown] = useState("");

  useEffect(() => {
    fetch(theTextFile)
      .then(response => response.text())
      .then(text => {
        setPostMarkdown(text);
      });
  }, []);

  const exampleMarkdown = `
  #title
  ##何力
  ###何何力

  **苯霸**
  `;
  return (
    <div>
      <Markdown>{exampleMarkdown}</Markdown>
      <Markdown>{postMarkdown}</Markdown>
      <button onClick={e => console.log(postMarkdown)}>click</button>
    </div>
  );
}
