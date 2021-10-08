import React from "react";
import { connect } from "react-redux";
import * as viewState from "../../../store/modules/viewState";
import ChangeViewMode from "./ChangeViewMode";

const ChangeViewModeContainer = props => {
  return <ChangeViewMode onChange={props.changeViewMode} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  changeViewMode: mode => dispatch(viewState.ChangeViewMode(mode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeViewModeContainer);
