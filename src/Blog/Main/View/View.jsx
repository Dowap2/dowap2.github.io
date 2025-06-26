import { useState, useEffect, useRef } from "react";
import { ViewContent } from "./ViewContent";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewComponent = styled.div`
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
  color: ${({ theme }) => theme.text};
`;

export function View() {
  const cacheRef = useRef({});

  const markdownFiles = useSelector(
    (state) => state.mdFileState.state.markdownFiles
  );
  const { index } = useParams();
  const [postMarkdown, setPostMarkdown] = useState([]);

  useEffect(() => {
    if (!cacheRef.current) return; // 안전장치

    // const intervalId = setInterval(() => {
    //   console.log(cacheRef.current);
    // }, 1000);

    // // 컴포넌트 언마운트 시 정리
    // return () => clearInterval(intervalId);

    const cachedData = cacheRef.current[index];
    console.log(cachedData);
    if (cachedData) {
      updatePostMarkdown(cachedData);
      return;
    }

    async function fetchMarkdown() {
      try {
        const url = markdownFiles[index];
        if (!url) return;

        const res = await fetch(url);
        const data = await res.text();

        cacheRef.current[index] = data;
        updatePostMarkdown(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchMarkdown();

    // 상태 업데이트 함수 분리
    function updatePostMarkdown(data) {
      setPostMarkdown((prev) => {
        const updated = [...prev];
        updated[index] = data;
        return updated;
      });
    }
  }, [index]); // index를 의존성에 추가

  return (
    <ViewComponent>
      <ViewContent
        content={cacheRef.current[index] ?? postMarkdown[index]}
      ></ViewContent>
    </ViewComponent>
  );
}
