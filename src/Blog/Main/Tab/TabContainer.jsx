import React from "react";
import { connect } from "react-redux";
import * as searchState from "../../../store/modules/searchState";
import { TabComponent } from "./TabComponent";

const TabContainer = props => {
  return <TabComponent onChange={props.search} onChangeWord={props.word} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  search: search => dispatch(searchState.ChangeSearchState(search)),
  word: search => dispatch(searchState.ChangeSearchKeyword(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
