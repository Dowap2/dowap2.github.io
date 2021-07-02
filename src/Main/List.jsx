import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const linkStyle = {
  color: "black",
  textDecoration: "none"
};
const ListComponent = styled.ul`
  width: 980px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItemComponent = styled.div`
  margin: 10px;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  background: #fff;
`;
const ListTitleComponent = styled.p`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
  font-size: 16px;
`;
const ListPreview = styled.div`
  padding: 10px;
`;

export function List(props) {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  const markdownTitle = markdownFiles.map(
    file => file.default.slice(14).split(".")[0]
  );
  const [ListItem, setListItem] = useState([]);

  useEffect(() => {
    async function SetMarkdownUrl() {
      const posts = await Promise.all(
        markdownFiles.map(file => file.default)
      ).catch(err => console.error(err));

      const post = await SetMarkdown(posts);
      CreateListItem(post);
    }

    async function SetMarkdown(url) {
      const postArray = await Promise.all(
        url.map(url =>
          fetch(url)
            .then(res => res.text())
            .then(data => {
              const preview = data.slice(0, 100);
              return preview;
            })
        )
      ).catch(err => console.error(err));

      return postArray;
    }

    SetMarkdownUrl();

    const CreateListItem = postMarkdown => {
      let index = 0;
      setListItem(
        markdownTitle.map(listTitle => {
          const item = (
            <Link to={`/view/${index}`} style={linkStyle} key={index}>
              <ListItemComponent>
                <ListTitleComponent>{listTitle}</ListTitleComponent>
                <ListPreview>{postMarkdown[index]}</ListPreview>
              </ListItemComponent>
            </Link>
          );
          index++;
          return item;
        })
      );
    };
  }, []);

  return <ListComponent>{ListItem}</ListComponent>;
}
