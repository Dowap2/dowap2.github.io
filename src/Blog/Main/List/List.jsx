import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChangeViewModeContainer from "./ChangeViewModeContainer";
import Markdown from "markdown-to-jsx";
import axios from "axios";
import { ACCESS_KEY } from "../../../key.js";
import Hangul from "hangul-js";

const ListBackground = styled.div`
  width: 100%;
  padding-bottom: 40px;
  display: flex;
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
const CardItemComponent = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  @media only screen and (max-width: 960px) {
    width: calc(100vw - 40px);
    margin: 0;
    margin-top: 20px;
  }
`;
const CardMainCompnent = styled.div`
  width: 650px;
  height: auto;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: row;
`;
const CardTitleComponent = styled.div`
  width: auto;
  height: 20px;
  margin: 0px;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  @media only screen and (max-width: 960px) {
    width: auto;
  }
`;
const ListTitleComponent = styled.p`
  box-sizing: border-box;
  width: 960px;
  height: 60px;
  padding: 15px 0px;
  margin: 10px 0px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid #f1f1f1;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const CardPreview = styled.p`
  box-sizing: border-box;
  padding: 15px;
  padding-top: 0px;
  height: auto;
  margin: 0;
  color: #4e5968;
  font-weight: 500;
  font-size: 15px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const CardTextComponent = styled.div`
  width: 100%;
`;
const CardImageComponent = styled.div`
  margin-left: 10px;
  width: 140px;
`;
const ThumbnailComponent = styled.img`
  margin-top: 15px;
  width: 100%;
  height: 80px;
  background: #f5f5f5;
  border: 0;
  border-radius: 10px;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;
const PreviewComponent = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 150%;
  display: inline;
`;
const HiddenComponent = styled.div`
  display: none;
`;
const CardTagComponent = styled.div`
  padding-left: 15px;
  width: 100%;
  height: 30px;
`;
const TagComponent = styled.div`
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 700;
  color: #212342;
  width: 50px;
  height: 20px;
  background: #e3f2fd;
`;

async function RandomThumbnail() {
  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: ACCESS_KEY,
        query: "technology",
        count: 20,
        orientation: "landscape"
      }
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export function List() {
  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  const markdownTitle = markdownFiles.map(file => file.slice(14).split(".")[0]);
  const [ListItem, setListItem] = useState([]);
  const searchWord = useSelector(
    state => state.searchState.state.searchKeyword
  );
  const viewMode = useSelector(state => state.viewState.state.viewMode);
  const [ThumbnailList, setThumbnailList] = useState([]);

  useEffect(() => {
    async function setThumbnail() {
      const ThumbnailArray = await RandomThumbnail();
      setThumbnailList(ThumbnailArray);
    }

    setThumbnail();
  }, []);

  useEffect(() => {
    async function SetMarkdownUrl() {
      const posts = await Promise.all(
        markdownFiles.map(file => file)
      ).catch(err => console.error(err));
      const post = await SetMarkdown(posts);
      console.log("2", ThumbnailList);
      CreateListItem(post, ThumbnailList);
    }

    async function SetMarkdown(url) {
      const postArray = await Promise.all(
        url.map(url =>
          fetch(url)
            .then(res => res.text())
            .then(data => {
              const preview = data.slice(0, 250);
              return preview;
            })
        )
      ).catch(err => console.error(err));

      return postArray;
    }

    const Preview = ({ children, ...props }) => (
      <PreviewComponent {...props}>{children}</PreviewComponent>
    );
    const HiddenText = ({ children, ...props }) => (
      <HiddenComponent {...props}>{children}</HiddenComponent>
    );

    SetMarkdownUrl();

    const CreateListItem = (postMarkdown, Thumbnail = []) => {
      let index = 0;
      let ThumbnailArr = Thumbnail;

      if (Thumbnail == undefined) {
        ThumbnailArr = [];
      }

      viewMode === "card"
        ? setListItem(
            markdownTitle.map(listTitle => {
              const disassembled = Hangul.disassemble(listTitle, true);

              const noJong = disassembled.map(char => {
                if (char.length > 2) {
                  return Hangul.assemble(
                    char.slice(0, Hangul.isVowel(char[2]) ? 3 : 2)
                  );
                }
                return Hangul.assemble(char);
              });

              let isTrueSearch =
                listTitle.toLowerCase().indexOf(searchWord.toLowerCase()) !==
                  -1 || Hangul.search(noJong, searchWord) !== -1;

              const item = (
                <Link to={`/view/${index}`} style={linkStyle} key={index}>
                  <CardItemComponent>
                    <CardMainCompnent>
                      <CardTextComponent>
                        <CardTitleComponent>{listTitle}</CardTitleComponent>
                        <CardPreview>
                          <Markdown
                            options={{
                              overrides: {
                                h1: {
                                  component: HiddenText
                                },
                                h6: {
                                  component: Preview
                                },
                                h2: {
                                  component: HiddenText
                                },
                                h3: {
                                  component: HiddenText
                                },
                                h4: {
                                  component: HiddenText
                                },
                                p: {
                                  component: HiddenText
                                },
                                code: {
                                  component: HiddenText
                                },
                                hr: {
                                  component: HiddenText
                                },
                                li: {
                                  component: HiddenText
                                },
                                table: {
                                  component: HiddenText
                                }
                              }
                            }}
                          >
                            {postMarkdown[index] === undefined
                              ? "글이 존재하지않습니다."
                              : postMarkdown[index]}
                          </Markdown>
                        </CardPreview>
                      </CardTextComponent>
                      <CardImageComponent>
                        <ThumbnailComponent
                          src={
                            ThumbnailArr[index]?.urls?.thumb ||
                            "/default-image.jpg"
                          }
                        />
                      </CardImageComponent>
                    </CardMainCompnent>
                    <CardTagComponent>
                      <TagComponent>#개발</TagComponent>
                    </CardTagComponent>
                  </CardItemComponent>
                </Link>
              );
              index++;
              return isTrueSearch ? item : null;
            })
          )
        : setListItem(
            markdownTitle.map(listTitle => {
              let isTrueSearch =
                listTitle.toLowerCase().indexOf(searchWord.toLowerCase()) !==
                  -1 || Hangul.search(listTitle, searchWord) !== -1;
              console.log(listTitle, isTrueSearch, searchWord);
              const item = (
                <StyledLink to={`/view/${index}`} style={linkStyle} key={index}>
                  <ListTitleComponent>
                    {index + 1}. {listTitle}
                  </ListTitleComponent>
                </StyledLink>
              );
              index++;
              return isTrueSearch ? item : null;
            })
          );
    };
  }, [searchWord, viewMode, ThumbnailList]);

  return (
    <ListBackground>
      {/* <ChangeViewModeContainer /> */}
      <ListComponent>
        {ListItem.findIndex(arr => arr !== null) === -1
          ? "검색 결과가 없습니다"
          : ListItem}
      </ListComponent>
      asfasd
    </ListBackground>
  );
}
