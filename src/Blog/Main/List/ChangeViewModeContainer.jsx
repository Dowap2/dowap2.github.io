import React from "react";
import { connect } from "react-redux";
import * as commentState from "../../../../store/modules/commentState";
import ChangeViewMode from "./ChangeViewMode";

const ChangeViewModeContainer = props => {
  return <ChangeViewMode onChange={props.viewMode} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  viewMode: viewMode => dispatch(commentState.ChangeViewMode(viewMode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeViewModeContainer);
