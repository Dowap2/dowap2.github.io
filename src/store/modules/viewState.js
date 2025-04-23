import { createAction } from "redux-actions";

const CHANGEVIEWMODE = "CHANGEVIEWMODE";

export const ChangeViewMode = createAction(CHANGEVIEWMODE);

const initalState = {
  state: {
    viewMode: "card"
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case CHANGEVIEWMODE: {
      return {
        viewMode: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
