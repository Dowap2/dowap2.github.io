import { useSelector } from "react-redux";
import styled from "styled-components";

const ClosingScreen = styled.div`
  display: ${props => (props.display === true ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  background: #000;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const ModalContent = styled.div`
  width: 1000px;
  height: 200px;
  background: #fff;
  z-index: 999;
`;

export function Modal(props) {
  const modalState = useSelector(state => state.modalState.modalState);
  return (
    <ClosingScreen
      display={modalState}
      onClick={e => props.onChange(false)}
    ></ClosingScreen>
  );
}
