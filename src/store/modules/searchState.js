import { createAction } from "redux-actions";

const SEARCHSTATE = "SEARCHSTATE";
const SEARCHKEYWORD = "SEARCHKEYWORD";

export const ChangeSearchState = createAction(SEARCHSTATE);
export const ChangeSearchKeyword = createAction(SEARCHKEYWORD);

const initalState = {
  state: {
    searchState: false,
    searchKeyword: ""
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SEARCHSTATE: {
      console.log(state.state.searchKeyword.length === 0, state);
      return {
        state: Object.assign(state.state, {
          searchState: state.state.searchKeyword.length ? true : action.payload
        })
      };
    }
    case SEARCHKEYWORD: {
      return {
        state: Object.assign(state.state, { searchKeyword: action.payload })
      };
    }
    default: {
      return state;
    }
  }
}
