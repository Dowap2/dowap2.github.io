import styled from "styled-components";
import { SlideBanner } from "./Banner/SlideBanner";
import { List } from "./List/List";

const MainBackground = styled.div`
  background: #f8f9fa;
`;

export function MainComponent() {
  return (
    <MainBackground>
      <SlideBanner />
      <List />
    </MainBackground>
  );
}
