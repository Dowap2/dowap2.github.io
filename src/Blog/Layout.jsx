import { MainComponent } from "./Main/MainComponent";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MainBackground = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.background};
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
