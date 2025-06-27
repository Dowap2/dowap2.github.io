import { useState, useEffect } from "react";
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
  const { index } = useParams();
  const url = useSelector((state) => state.mdFileState?.markdownFiles[index]);
  console.log(url);
  console.log(index);
  const [postMarkdown, setPostMarkdown] = useState([]);

  useEffect(() => {
    console.log("effect");
    async function fetchMarkdown() {
      try {
        const res = await fetch(url);
        const data = await res.text();

        setPostMarkdown((prev) => {
          const updated = [...prev];
          updated[index] = data;
          return updated;
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMarkdown();

    return console.log("unmount");
  }, []);

  return (
    <ViewComponent>
      <ViewContent content={postMarkdown[index]}></ViewContent>
    </ViewComponent>
  );
}
