import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import languageState from "./languageState";
import mdFileState from "./mdFileState";
import searchState from "./searchState";
import commentState from "./commentState";
import modalState from "./modalState";
import viewState from "./viewState";
import pageState from "./pageState";

// console.log("🔍 pageState:", typeof pageState, pageState);
// console.log("🔍 languageState:", typeof languageState, languageState);
// console.log("🔍 mdFileState:", typeof mdFileState, mdFileState);
// console.log("🔍 searchState:", typeof searchState, searchState);
// console.log("🔍 commentState:", typeof commentState, commentState);
// console.log("🔍 modalState:", typeof modalState, modalState);
// console.log("🔍 viewState:", typeof viewState, viewState);

const rootReducer = combineReducers({
  pageState: pageState || ((state = {}) => state),
  languageState: languageState || ((state = {}) => state),
  mdFileState: mdFileState || ((state = {}) => state),
  searchState: searchState || ((state = {}) => state),
  commentState: commentState || ((state = {}) => state),
  modalState: modalState || ((state = {}) => state),
  viewState: viewState || ((state = {}) => state),
});

const store = configureStore({ reducer: rootReducer });

export default store;
