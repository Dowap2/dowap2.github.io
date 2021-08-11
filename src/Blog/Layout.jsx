import { MainComponent } from "./Main/MainComponent";
import styled from "styled-components";

const LayoutComponent = styled.div`
  display: flex;
  width: 960px;
  margin: auto;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function Layout() {
  return (
    <LayoutComponent>
      <MainComponent />
    </LayoutComponent>
  );
}
