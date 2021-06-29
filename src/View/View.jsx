import { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(require.context("../posts", false, /\.md$/));

const ViewComponent = styled.div`
  width: 980px;
  margin: auto;
`;

const CodeComponent = styled.div`
  background: #f5f5f5;
  padding: 10px;
`;
const PComponent = styled.div`
  font-size: 18px;
  line-height: 30px;
`;

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

  const Code = ({ children, ...props }) => (
    <CodeComponent {...props}>{children}</CodeComponent>
  );
  const P = ({ children, ...props }) => (
    <PComponent {...props}>{children}</PComponent>
  );

  return (
    <ViewComponent>
      <Markdown
        options={{
          overrides: {
            code: {
              component: Code
            },
            p: {
              component: P
            }
          }
        }}
      >
        {postMarkdown[index] === undefined
          ? "글이 존재하지않습니다."
          : postMarkdown[index]}
      </Markdown>
    </ViewComponent>
  );
}
