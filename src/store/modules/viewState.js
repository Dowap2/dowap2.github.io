import { createAction } from "redux-actions";

const CHANGEVIEWMODE = "CHANGEVIEWMODE";

export const ChangeViewMode = createAction(CHANGEVIEWMODE);

const initialState = {
  viewMode: "card",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGEVIEWMODE: {
      return {
        ...state,
        viewMode: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
