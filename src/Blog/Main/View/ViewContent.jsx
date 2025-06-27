import styled from "styled-components";
import Markdown from "markdown-to-jsx";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const PComponent = styled.div`
  font-size: 18px;
  line-height: 30px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const H1Component = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
`;
const HRComponent = styled.hr`
  border: 2px solid e9ecef;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text};
`;
const SpanComponent = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.pointBackground};
  margin: 3px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointText};
`;
const LiComponent = styled.li`
  padding-bottom: 10px;
  line-height: 30px;
  color: ${({ theme }) => theme.text};
`;
const TableComponent = styled.table`
  border: 1px solid #e9ecef;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  color: ${({ theme }) => theme.text};
  th {
    background: ${({ theme }) => theme.pointBackground};
    color: ${({ theme }) => theme.pointText};
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
const ImgComponent = styled.img`
  width: ${(props) => props.width};
`;

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
const ImgFile = ({ children, ...props }) => (
  <ImgComponent {...props} src={props.src}></ImgComponent>
);

function Code({ className, children }) {
  if (className === undefined) {
    return <SpanComponent>{children}</SpanComponent>;
  }
  const language = className.replace("lang-", "");
  return (
    <div className="codeBlock">
      <SyntaxHighlighter language={language.toLowerCase()} style={materialDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

export function ViewContent(props) {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: H1,
          },
          h5: {
            component: Hidden,
          },
          h6: {
            component: Hidden,
          },
          code: {
            component: Code,
          },
          p: {
            component: P,
          },
          li: {
            component: Li,
          },
          hr: {
            component: Hr,
          },
          table: {
            component: Table,
          },
          img: {
            component: ImgFile,
          },
        },
      }}
    >
      {props.content ?? "글이 존재하지 않습니다."}
    </Markdown>
  );
}
