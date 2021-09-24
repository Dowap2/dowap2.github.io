import React from "react";
import { connect } from "react-redux";
import * as modalState from "../../../../store/modules/modalState";
import { CommentOutput } from "./CommentOutput";

const CommentOutputContainer = props => {
  return <CommentOutput onChange={props.modalState} index={props.index} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modalState: state => dispatch(modalState.ChangeModalState(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentOutputContainer);
