import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ListBackground = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
const linkStyle = {
  color: "black",
  textDecoration: "none"
};
const ListComponent = styled.ul`
  width: 960px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const ListItemSpace = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
`;
const ListItemComponent = styled.div`
  margin: 20px;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  &:hover {
    margin-top: 10px;
    box-shadow: rgb(0 0 0 / 16%) 0px 4px 16px 0px;
  }
`;
const ListTitleComponent = styled.p`
  box-sizing: border-box;
  width: 300px;
  padding: 15px;
  border-bottom: 1px solid #2770f5;
  font-size: 16px;
`;
const ListPreview = styled.p`
  padding: 10px;
  font-weight: lighter;
  font-size: 14px;
`;

export function List() {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  console.log(markdownFiles);
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
              const preview = data.slice(0, 150);
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
              <ListItemSpace>
                <ListItemComponent>
                  <ListTitleComponent>{listTitle}</ListTitleComponent>
                  <ListPreview>{postMarkdown[index]}</ListPreview>
                </ListItemComponent>
              </ListItemSpace>
            </Link>
          );
          index++;
          return item;
        })
      );
    };
  }, []);
  return (
    <ListBackground>
      <ListComponent>{ListItem}</ListComponent>
    </ListBackground>
  );
}
