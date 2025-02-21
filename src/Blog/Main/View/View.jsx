import { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useSelector } from "react-redux";

const ViewComponent = styled.div`
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

const CodeComponent = styled.div`
  background: #f5f5f5;
  padding: 10px;
  box-sizing: border-box;
  overflow: scroll;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const PComponent = styled.div`
  font-size: 18px;
  line-height: 30px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const H1Component = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const HRComponent = styled.hr`
  color: blue;
`;
const SpanComponent = styled.div`
  display: inline;
  background: #f5f5f5;
  padding: 4px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 5px;
`;

export function View(props) {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  const index = props.match.params.index;
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
  const P = ({ children, ...props }) => (
    <PComponent {...props}>{children}</PComponent>
  );
  const H1 = ({ children, ...props }) => (
    <H1Component {...props}>{children}</H1Component>
  );
  const Hr = ({ children, ...props }) => (
    <HRComponent {...props}>{children}</HRComponent>
  );
  const Span = ({ children, ...props }) => (
    <SpanComponent {...props}>{children}</SpanComponent>
  );

  function Code({ className, children }) {
    if (className === undefined) {
      return <SpanComponent {...props}>{children}</SpanComponent>;
    }
    const language = className.replace("lang-", "");
    return (
      <div className="codeBlock">
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={materialDark}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <ViewComponent>
      <Markdown
        options={{
          overrides: {
            h1: {
              component: H1
            },
            code: {
              component: Code
            },
            p: {
              component: P
            },
            hr: {
              component: Hr
            },
            span: {
              component: Span
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
