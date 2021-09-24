import React from "react";
import { connect } from "react-redux";
import * as modalState from "../../../../store/modules/modalState";
import { ModalComponent } from "./ModalComponent";

const ModalContainer = props => {
  return <ModalComponent onChange={props.modalState} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modalState: state => dispatch(modalState.ChangeModalState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
