import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(require.context("../posts", false, /\.md$/));

export function View(props) {
  const [postMarkdown, setPostMarkdown] = useState([]);

  useEffect(() => {
    async function SetMarkdownUrl() {
      const posts = await Promise.all(
        markdownFiles.map(file => file.default)
      ).catch(err => console.error(err));

      const post = await SetMarkdown(posts);
      setPostMarkdown(post);
    }

    function SetMarkdown(url) {
      return new Promise(function(res, rej) {
        const post = url.map(url =>
          fetch(url)
            .then(res => res.text())
            .then(data => {
              res(data);
            })
        );
      });
    }

    SetMarkdownUrl();
  }, []);

  return (
    <div>
      <Markdown>{postMarkdown}</Markdown>
      <button onClick={e => console.log(postMarkdown)}></button>
    </div>
  );
}
