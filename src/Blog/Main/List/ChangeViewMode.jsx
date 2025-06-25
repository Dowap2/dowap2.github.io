import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReactComponent as GridView } from "../../../Img/GridViewIcon.svg";
import { ReactComponent as ListView } from "../../../Img/ListViewIcon.svg";
import { useCallback } from "react";

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
  cursor: pointer;
`;

const IconComponent = styled.div`
  width: 30px;
  height: 30px;
  padding: 3px;
  box-sizing: border-box;
  margin-left: 10px;
`;

const GridButtonText = styled.div`
  font-weight: bold;
  color: ${(props) => (props.viewMode === "card" ? "#000000" : "#808080")};
`;

const ListButtonText = styled.div`
  font-weight: bold;
  color: ${(props) => (props.viewMode === "card" ? "#808080" : "#000000")};
`;

const ChangeViewModeButtonAnimationBorder = styled.div`
  width: 120px;
  height: 2px;
  background: #000;
  margin-left: ${(props) => (props.viewMode === "card" ? "0px" : "120px")};
  transition: 0.5s;
`;

export default function ChangeViewMode(props) {
  const viewMode = useSelector((state) => state.viewState.state.viewMode);

  // onChange 콜백을 분리하여 useCallback으로 메모이제이션
  const onCardClick = useCallback(() => {
    props.onChange("card");
  }, [props.onChange]);

  const onListClick = useCallback(() => {
    props.onChange("list");
  }, [props.onChange]);

  return (
    <ChangeViewModeComponent>
      <ChangeViewModeButtonComponent>
        <ChangeViewModeButtonContainer
          onClick={onCardClick}
          role="button"
          tabIndex={0}
        >
          <IconComponent>
            <GridView fill={viewMode === "card" ? "#000000" : "#808080"} />
          </IconComponent>
          <GridButtonText viewMode={viewMode}>카드 뷰</GridButtonText>
        </ChangeViewModeButtonContainer>

        <ChangeViewModeButtonContainer
          onClick={onListClick}
          role="button"
          tabIndex={0}
        >
          <IconComponent>
            <ListView fill={viewMode === "card" ? "#808080" : "#000000"} />
          </IconComponent>
          <ListButtonText viewMode={viewMode}>리스트 뷰</ListButtonText>
        </ChangeViewModeButtonContainer>
      </ChangeViewModeButtonComponent>

      <ChangeViewModeButtonAnimationBorder viewMode={viewMode} />
    </ChangeViewModeComponent>
  );
}
