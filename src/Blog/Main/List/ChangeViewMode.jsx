import styled from "styled-components";

const ChangeViewModeComponent = styled.div`
  width: 100%;
  padding-bottom: 40px;
`;
const ChangeViewModeButton = styled.button`
  width: 100%;
  padding-bottom: 40px;
`;
export default function ChangeViewMode(props) {
  return (
    <ChangeViewModeComponent>
      <ChangeViewModeButton onClick={e => props.onChange(true)}>
        card view
      </ChangeViewModeButton>
      <ChangeViewModeButton onClick={e => props.onChange(false)}>
        list view
      </ChangeViewModeButton>
    </ChangeViewModeComponent>
  );
}
