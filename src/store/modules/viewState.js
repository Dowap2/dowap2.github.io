import { createAction } from "redux-actions";

const CHANGEVIEWMODE = "CHANGEVIEWMODE";

export const ChangeViewMode = createAction(CHANGEVIEWMODE);

const initalState = {
  state: {
    viewMode: true
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ChangeViewMode: {
      return {
        state: { viewMode: action.payload }
      };
    }
    default: {
      return state;
    }
  }
}
