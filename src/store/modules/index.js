import { combineReducers } from "redux";
import languageState from "./languageState";
import mdFileState from "./mdFileState";
import searchState from "./searchState";
import commentState from "./commentState";
import modalState from "./modalState";

export default combineReducers({
  languageState,
  mdFileState,
  searchState,
  commentState,
  modalState
});
