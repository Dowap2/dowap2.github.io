import styled from "styled-components";
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

const ListComponent = styled.ul`
  width: 980px;
  margin: auto;
`;

export function List(props) {
  return <ListComponent>{ListItem}</ListComponent>;
}
