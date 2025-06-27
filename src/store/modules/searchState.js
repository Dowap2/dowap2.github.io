import { createAction } from "redux-actions";

const SEARCHSTATE = "SEARCHSTATE";
const SEARCHKEYWORD = "SEARCHKEYWORD";

export const ChangeSearchState = createAction(SEARCHSTATE);
export const ChangeSearchKeyword = createAction(SEARCHKEYWORD);

const initialState = {
  searchState: true,
  searchKeyword: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCHSTATE: {
      const { searchKeyword } = state.state;
      const newSearchState = searchKeyword.length === 0 ? true : false;

      return {
        ...state,
        searchState: newSearchState,
      };
    }

    case SEARCHKEYWORD: {
      return {
        ...state,
        searchKeyword: action.payload,
      };
    }

    default:
      return state;
  }
}
