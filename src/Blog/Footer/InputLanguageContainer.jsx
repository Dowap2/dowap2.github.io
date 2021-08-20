import React from "react";
import { connect } from "react-redux";
import * as languageActions from "../../store/modules/languageState";
import { InputLanguage } from "./InputLanguage";

const InputLanguageContainer = props => {
  return <InputLanguage onChange={props.language} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  language: language => dispatch(languageActions.ChangeLanguage(language))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputLanguageContainer);
