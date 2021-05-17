import { createAction } from "redux-actions";

const MODALSTATE = "MODALSTATE";

export const ChangeModalState = createAction(MODALSTATE);

const initalState = {
  modalState: false
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case MODALSTATE: {
      return { modalState: action.payload };
    }
    default: {
      return state;
    }
  }
}
