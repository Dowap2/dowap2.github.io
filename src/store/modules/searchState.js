import { createAction } from "redux-actions";

const SEARCHSTATE = "SEARCHSTATE";
const SEARCHKEYWORD = "SEARCHKEYWORD";

export const ChangeSearchState = createAction(SEARCHSTATE);
export const ChangeSearchKeyword = createAction(SEARCHKEYWORD);

const initalState = {
  state: {
    searchState: true,
    searchKeyword: ""
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SEARCHSTATE: {
      return {
        state: Object.assign(state.state, { searchState: action.payload })
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
