import React from "react";
import { connect } from "react-redux";
import * as searchState from "../../../store/modules/searchState";
import { TabComponent } from "./TabComponent";

const TabContainer = props => {
  return <TabComponent onChange={props.search} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  search: search => dispatch(searchState.ChangeSearchState(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
