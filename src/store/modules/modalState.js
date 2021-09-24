import { createAction } from "redux-actions";

const MODALSTATE = "MODALSTATE";

export const ChangeModalState = createAction(MODALSTATE);

const initalState = {
  state: {
    modalState: false
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case MODALSTATE: {
      return { state: { modalState: action.payload } };
    }
    default: {
      return state;
    }
  }
}
