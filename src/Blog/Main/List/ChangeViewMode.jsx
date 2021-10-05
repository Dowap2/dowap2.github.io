import styled from "styled-components";

const ChangeViewModeComponent = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
const ChangeViewModeButton = styled.button`
  width: 100%;
  padding-bottom: 40px;
`;
export default function ChangeViewMode() {
  return (
    <ChangeViewModeComponent>
      <ChangeViewModeButton>card view</ChangeViewModeButton>
      <ChangeViewModeButton>list view</ChangeViewModeButton>
    </ChangeViewModeComponent>
  );
}
