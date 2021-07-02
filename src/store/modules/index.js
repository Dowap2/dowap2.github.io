import { combineReducers } from "redux";
import languageState from "./languageState";
import mdFileState from "./mdFileState";

export default combineReducers({
  languageState,
  mdFileState
});
