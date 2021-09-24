import { useSelector } from "react-redux";
import styled from "styled-components";

const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: ${props => (props.state === false ? "none" : "block")};
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

export function ModalComponent(props) {
  const state = useSelector(state => state.modalState.state.modalState);
  console.log(state);
  return (
    <ModalBackground state={state}>
      <button onClick={e => props.onChange(!state)}>x</button>
    </ModalBackground>
  );
}
