import { combineReducers } from "redux";
import languageState from "./languageState";
import mdFileState from "./mdFileState";
import searchState from "./searchState";

export default combineReducers({
  languageState,
  mdFileState,
  searchState
});
