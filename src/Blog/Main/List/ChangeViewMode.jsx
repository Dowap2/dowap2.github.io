import { useSelector } from "react-redux";
import styled from "styled-components";
import GridView from "../../../Img/GridViewIcon.png";
import ListView from "../../../Img/ListViewIcon.png";

const ChangeViewModeComponent = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
const ChangeViewModeButtonComponent = styled.div`
  display: flex;
`;
const ChangeViewModeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 120px;
`;
const GridButtonIcon = styled.img`
  width: 30px;
  padding-right: 10px;
`;
const GridButtonText = styled.div`
  font-weight: bold;
`;
const ListButtonIcon = styled.img`
  width: 30px;
  padding-right: 10px;
`;
const ListButtonText = styled.div`
  font-weight: bold;
`;
const ChangeViewModeButtonAnimationBorder = styled.div`
  width: 120px;
  height: 2px;
  background: #000;
`;

export default function ChangeViewMode(props) {
  const viewMode = useSelector(state => state.viewState.state.viewMode);
  return (
    <ChangeViewModeComponent>
      <ChangeViewModeButtonComponent>
        <ChangeViewModeButtonContainer onClick={e => props.onChange("card")}>
          <GridButtonIcon src={GridView} viewMode={viewMode} />
          <GridButtonText viewMode={viewMode}>그리드 뷰</GridButtonText>
        </ChangeViewModeButtonContainer>
        <ChangeViewModeButtonContainer onClick={e => props.onChange("list")}>
          <ListButtonText src={ListView} viewMode={viewMode} />
          <ListButtonIcon viewMode={viewMode}>리스트 뷰</ListButtonIcon>
        </ChangeViewModeButtonContainer>
      </ChangeViewModeButtonComponent>
      <ChangeViewModeButtonAnimationBorder></ChangeViewModeButtonAnimationBorder>
    </ChangeViewModeComponent>
  );
}
