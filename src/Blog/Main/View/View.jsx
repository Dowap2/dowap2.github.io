import { useState, useEffect } from "react";
import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
  border: 2px solid e9ecef;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const SpanComponent = styled.div`
  display: inline;
  background: #e9ecef;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
`;
const LiComponent = styled.li`
  padding-bottom: 10px;
  line-height: 30px;
`;
const TableComponent = styled.table`
  border: 1px solid #e9ecef;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  th {
    background: #e9ecef;
    padding: 10px;
    border: 1px solid #808080;
  }
  tr {
    border: 1px solid #808080;
  }
  td {
    padding: 10px;
    border: 1px solid #808080;
    margin: 0;
  }
`;
const HiddenComponent = styled.div`
  display: none;
`;
export function View(props) {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  console.log(props);
  const { index } = useParams();
  const [postMarkdown, setPostMarkdown] = useState([]);

  useEffect(() => {
    async function SetMarkdownUrl() {
      const posts = await Promise.all(
        markdownFiles.map(file => file)
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
  const Li = ({ children, ...props }) => (
    <LiComponent {...props}>{children}</LiComponent>
  );

  const Table = ({ children, ...props }) => (
    <TableComponent {...props}>{children}</TableComponent>
  );
  const Hidden = ({ children, ...props }) => (
    <HiddenComponent {...props}>{children}</HiddenComponent>
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
            h6: {
              component: Hidden
            },
            code: {
              component: Code
            },
            p: {
              component: P
            },
            li: {
              component: Li
            },
            hr: {
              component: Hr
            },
            table: {
              component: Table
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
