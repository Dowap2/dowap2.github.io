import { View } from "./View";
import { Comment } from "./Comment/Comment";
import styled from "styled-components";
import ModalContainer from "./modal/ModalContainer";

const LayoutComponent = styled.div`
  width: 100%;
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
        <ModalContainer />
        <View match={match} />
        <Comment match={match} />
      </LayoutComponent>
    </div>
  );
}
