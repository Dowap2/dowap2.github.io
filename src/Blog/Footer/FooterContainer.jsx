import React from "react";
import { connect } from "react-redux";
import * as languageActions from "../../store/modules/languageState";
import { Footer } from "./Footer";

const FooterContainer = props => {
  return <Footer onChange={props.language} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  language: language => dispatch(languageActions.ChangeLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
