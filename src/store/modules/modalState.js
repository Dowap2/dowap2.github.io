import { createAction } from "redux-actions";

const MODALSTATE = "MODALSTATE";

export const ChangeModalState = createAction(MODALSTATE);

const initialState = {
  modalState: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MODALSTATE: {
      return { modalState: action.payload };
    }
    default: {
      return state;
    }
  }
}
