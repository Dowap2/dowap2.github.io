import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo, useRef } from "react";
import TabContainer from "../Tab/TabContainer";
import Markdown from "markdown-to-jsx";
import axios from "axios";
import { ACCESS_KEY } from "../../../key.js";
import Hangul from "hangul-js";
import { colors } from "../../../palette.ts";
import { dataCache } from "../../../fetchCache";
import { SideBarComponent } from "../SideBar/SideBarComponent";

// Styled Components
const ListBackground = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 40px;
`;

const ListContainer = styled.ul`
  display: flex;
  width: 960px;
  padding: 0;
  flex-wrap: wrap;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

const CardItemComponent = styled.div`
  margin: 24px 0;
  @media only screen and (max-width: 960px) {
    width: calc(100vw - 40px);
    margin: 20px 0 0;
  }
`;

const CardMainComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 650px;
  border-radius: 5px;
`;

const CardTitleComponent = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const CardPreview = styled.p`
  padding: 0 15px 15px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
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
  background: ${colors.gray[200]};
  border-radius: 10px;
  object-fit: cover;
`;

const CardTagComponent = styled.div`
  padding-left: 15px;
  width: 100%;
  height: 30px;
`;

const TagComponent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointText};
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px;
  height: 24px;
  border-radius: 3px;
  background: ${({ theme }) => theme.pointBackground};
`;

const HiddenComponent = styled.div`
  display: none;
`;

const PreviewComponent = styled.div`
  font-size: 15px;
  font-weight: 300;
  line-height: 150%;
  display: inline;
`;

const NoResultComponent = styled.div`
  width: 100%;
  height: 500px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

// API call to Unsplash
async function fetchRandomThumbnails() {
  try {
    const { data } = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: ACCESS_KEY,
        query: "technology",
        count: 20,
        orientation: "landscape"
      }
    });
    dataCache.thumbnails = data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Component
function ListComponent() {
  const [postPreviews, setPostPreviews] = useState(dataCache.previews);
  const [thumbnails, setThumbnails] = useState(dataCache.thumbnails);
  const Tags = [];

  const markdownFiles = useSelector(
    state => state.mdFileState.state.markdownFiles
  );
  const searchWord = useSelector(
    state => state.searchState.state.searchKeyword
  );

  const titles = useMemo(
    () => markdownFiles.map(file => file.slice(14).split(".")[0]),
    [markdownFiles]
  );
  const NoResult = <NoResultComponent>검색 결과가 없습니다</NoResultComponent>;

  useEffect(() => {
    // 테마로 인한 리렌더 방지
    if (dataCache.previews.length !== 0) {
      setPostPreviews(dataCache.previews);
      setThumbnails(dataCache.thumbnails);
      return;
    }

    console.log("effect");

    fetchRandomThumbnails().then(setThumbnails);

    async function fetchPreviews() {
      const texts = await Promise.all(
        markdownFiles.map(url =>
          fetch(url)
            .then(res => res.text())
            .then(data => data.slice(0, 250))
        )
      );
      setPostPreviews(texts);
      dataCache.previews = texts;
    }
    fetchPreviews();
  }, []);

  const renderList = useMemo(() => {
    console.log(postPreviews);
    // 테마로 인한 리렌더 방지
    if (dataCache.renderList.length !== 0) {
      return dataCache.renderList;
    }
    const Preview = ({ children, ...props }) => (
      <PreviewComponent {...props}>{children}</PreviewComponent>
    );
    const Hidden = ({ children, ...props }) => (
      <HiddenComponent {...props}>{children}</HiddenComponent>
    );
    const Tag = ({ children, ...props }) => (
      console.log(children),
      (
        <CardTagComponent {...props}>
          {children[0]
            .split(",")
            .map(tag => (Tags.push(tag), (<TagComponent>{tag}</TagComponent>)))}
        </CardTagComponent>
      )
    );
    return titles.map((title, index) => {
      const disassembled = Hangul.disassemble(title, true);
      const noJong = disassembled.map(char =>
        char.length > 2
          ? Hangul.assemble(char.slice(0, Hangul.isVowel(char[2]) ? 3 : 2))
          : Hangul.assemble(char)
      );

      const matched =
        title.toLowerCase().includes(searchWord.toLowerCase()) ||
        Hangul.search(noJong, searchWord) !== -1;

      if (!matched) return null;

      return (
        <Link
          to={`/view/${index}`}
          style={{ textDecoration: "none", color: "black" }}
          key={index}
        >
          <CardItemComponent>
            <CardMainComponent>
              <CardTextComponent>
                <CardTitleComponent>{title}</CardTitleComponent>
                <CardPreview>
                  <Markdown
                    options={{
                      overrides: {
                        h1: { component: Hidden },
                        h2: { component: Hidden },
                        h3: { component: Hidden },
                        h4: { component: Hidden },
                        h5: { component: Preview },
                        h6: { component: Preview },
                        p: { component: Hidden },
                        code: { component: Hidden },
                        hr: { component: Hidden },
                        li: { component: Hidden },
                        table: { component: Hidden }
                      }
                    }}
                  >
                    {postPreviews[index]}
                  </Markdown>
                </CardPreview>
              </CardTextComponent>
              <CardImageComponent>
                <ThumbnailComponent
                  src={thumbnails[index]?.urls?.thumb || "/default-image.jpg"}
                />
              </CardImageComponent>
            </CardMainComponent>
            <Markdown
              options={{
                overrides: {
                  h1: { component: Hidden },
                  h2: { component: Hidden },
                  h3: { component: Hidden },
                  h4: { component: Hidden },
                  h5: { component: Tag },
                  h6: { component: Hidden },
                  p: { component: Hidden },
                  code: { component: Hidden },
                  hr: { component: Hidden },
                  li: { component: Hidden },
                  table: { component: Hidden }
                }
              }}
            >
              {postPreviews[index]}
            </Markdown>
          </CardItemComponent>
        </Link>
      );
    });
  }, [titles, searchWord, thumbnails, postPreviews]);
  console.log("vv", Tags);
  return (
    <ListBackground>
      <ListContainer>
        <TabContainer />
        {renderList.every(item => item === null) ? NoResult : renderList}
      </ListContainer>
      <SideBarComponent TagList={Tags} />
    </ListBackground>
  );
}

export const List = React.memo(ListComponent);
