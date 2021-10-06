import React from "react";
import { connect } from "react-redux";
import * as commentState from "../../../../store/modules/commentState";
import ChangeViewMode from "./ChangeViewMode";

const ChangeViewModeContainer = props => {
  return <ChangeViewMode onClick={props.comment} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  comment: comment => dispatch(commentState.AddComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeViewModeContainer);
