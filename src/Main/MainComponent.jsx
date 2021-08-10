import styled from "styled-components";
import { SlideBanner } from "./SlideBanner";
import { Layout } from "./Layout";

const MainBackground = styled.div`
  background: #f8f9fa;
`;

export function MainComponent() {
  return (
    <MainBackground>
      <SlideBanner />
      <Layout />
    </MainBackground>
  );
}
