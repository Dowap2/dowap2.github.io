import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(require.context("../posts", false, /\.md$/));

export function View({ match }) {
  const index = match.params.index;
  const [postMarkdown, setPostMarkdown] = useState([]);

  useEffect(() => {
    async function SetMarkdownUrl() {
      const posts = await Promise.all(
        markdownFiles.map(file => file.default)
      ).catch(err => console.error(err));

      const post = await SetMarkdown(posts);
      setPostMarkdown(post);
    }

    async function SetMarkdown(url) {
      const postArray = await Promise.all(
        url.map(url =>
          fetch(url)
            .then(res => res.text())
            .then(data => {
              return data;
            })
        )
      ).catch(err => console.error(err));

      return postArray;
    }

    SetMarkdownUrl();
  }, []);

  return (
    <div>
      <Markdown>
        {postMarkdown[index] === undefined
          ? "글을 찾을 수 없습니다"
          : postMarkdown[index]}
      </Markdown>
      <button onClick={e => console.log(postMarkdown)}></button>
    </div>
  );
}
