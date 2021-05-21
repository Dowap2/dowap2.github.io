import React from "react";
import { FormButton } from "./FormButton";
import { connect } from "react-redux";
import * as modalActions from "../store/modules/modalState";

export function FormButtonContainer(props) {
  return <FormButton />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modalState: state => dispatch(modalActions.ChangeModalState(state))
});

FormButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormButtonContainer);
