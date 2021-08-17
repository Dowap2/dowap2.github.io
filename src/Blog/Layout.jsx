import { MainComponent } from "./Main/MainComponent";
import styled from "styled-components";

const MainBackground = styled.div`
  width: 100%;
  height: 100%;
  background: #f8f9fa;
`;

const LayoutComponent = styled.div`
  width: 960px;
  margin: auto;
  padding: 20px;
  @media only screen and (max-width: 960px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export function Layout() {
  return (
    <MainBackground>
      <LayoutComponent>
        <MainComponent />
      </LayoutComponent>
    </MainBackground>
  );
}
