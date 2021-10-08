import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChangeViewModeContainer from "./ChangeViewModeContainer";

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
  height: 420px;
  display: flex;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const ListItemComponent = styled.div`
  margin: 20px;
  width: 300px;
  height: 400px;
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
  @media only screen and (max-width: 960px) {
    width: calc(100vw - 40px);
    margin: 0;
    margin-top: 20px;
  }
`;
const ListTitleComponent = styled.p`
  box-sizing: border-box;
  width: 300px;
  height: 20px;
  padding: 0px 15px;
  margin: 0px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const ListPreview = styled.p`
  box-sizing: border-box;
  padding: 10px;
  height: 150px;
  margin: 0;
  font-weight: lighter;
  font-size: 14px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const Thumbnail = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  background: #000000;
  border-radius: 5px 5px 0px 0px;
`;

export function List() {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  const markdownTitle = markdownFiles.map(
    file => file.default.slice(14).split(".")[0]
  );
  const [ListItem, setListItem] = useState([]);
  const searchWord = useSelector(
    state => state.searchState.state.searchKeyword
  );
  const viewMode = useSelector(state => state.viewState.state.viewMode);

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
      viewMode === "card"
        ? setListItem(
            markdownTitle.map(listTitle => {
              const item = (
                <Link to={`/view/${index}`} style={linkStyle} key={index}>
                  <ListItemSpace>
                    <ListItemComponent>
                      <Thumbnail />
                      <ListTitleComponent>{listTitle}</ListTitleComponent>
                      <ListPreview>{postMarkdown[index]}</ListPreview>
                    </ListItemComponent>
                  </ListItemSpace>
                </Link>
              );
              index++;
              return listTitle
                .toLowerCase()
                .indexOf(searchWord.toLowerCase()) === -1
                ? null
                : item;
            })
          )
        : setListItem(
            markdownTitle.map(listTitle => {
              const item = (
                <Link to={`/view/${index}`} style={linkStyle} key={index}>
                  <ListItemSpace>
                    <ListTitleComponent>{listTitle}</ListTitleComponent>
                    <ListPreview>{postMarkdown[index]}</ListPreview>
                  </ListItemSpace>
                </Link>
              );
              index++;
              return listTitle
                .toLowerCase()
                .indexOf(searchWord.toLowerCase()) === -1
                ? null
                : item;
            })
          );
    };
  }, [searchWord, viewMode]);
  return (
    <ListBackground>
      <button onClick={e => console.log(viewMode)}></button>
      <ChangeViewModeContainer />
      <ListComponent>{ListItem}</ListComponent>
    </ListBackground>
  );
}
