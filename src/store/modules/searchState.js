import { createAction } from "redux-actions";

const SEARCHSTATE = "SEARCHSTATE";

export const ChangeSearchState = createAction(SEARCHSTATE);

const initalState = {
  searchState: true
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case SEARCHSTATE: {
      return { searchState: action.payload };
    }
    default: {
      return state;
    }
  }
}
