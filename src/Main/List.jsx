import styled from "styled-components";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "black",
  textDecoration: "none"
};
const ListComponent = styled.ul`
  width: 980px;
  margin: auto;
  padding: 0;
`;
const ListItemComponent = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 60px;
  border-bottom: 1px solid #f1f1f1;
`;
const ListTitleComponent = styled.h2`
  margin: 10px;
`;

const importAll = r => r.keys().map(r);
const markdownFiles = importAll(
  require.context("../posts", false, /\.md$/)
).map(file => file.default.slice(14).split(".")[0]);

let index = 0;
const ListItem = markdownFiles.map(listTitle => {
  const item = (
    <Link to={`/view/${index}`} style={linkStyle} key={index}>
      <ListItemComponent>
        <ListTitleComponent>{listTitle}</ListTitleComponent>
      </ListItemComponent>
    </Link>
  );
  index++;
  return item;
});

export function List(props) {
  return <ListComponent>{ListItem}</ListComponent>;
}
