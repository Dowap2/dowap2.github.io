import { createAction } from "redux-actions";

const SEARCHSTATE = "SEARCHSTATE";
const SEARCHKEYWORD = "SEARCHKEYWORD";

export const ChangeSearchState = createAction(SEARCHSTATE);
export const ChangeSearchKeyword = createAction(SEARCHKEYWORD);

const initalState = {
  searchState: true,
  searchKeyword: ""
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SEARCHSTATE: {
      return { searchState: action.payload };
    }
    case SEARCHKEYWORD: {
      return {
        state: Object.assign(state.state, { boxWidth: action.payload })
      };
    }
    default: {
      return state;
    }
  }
}
