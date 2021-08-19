import { View } from "./View";
import { Comment } from "./Comment";
import styled from "styled-components";

const LayoutComponent = styled.div`
  width: 960px;
  padding: 20px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

export function ViewComponent({ match }) {
  return (
    <div>
      <LayoutComponent>
        <View match={match} />
        <Comment />
      </LayoutComponent>
    </div>
  );
}
