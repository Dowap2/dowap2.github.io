import { Modal } from "./Modal";
import { connect } from "react-redux";
import * as modalActions from "../store/modules/modalState";

export function ModalContainer(props) {
  return <Modal onChange={props.modalState} />;
}
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modalState: state => dispatch(modalActions.ChangeModalState(state))
});

ModalContainer = connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
