import { createAction } from "redux-actions";

const ADDCOMMENT = "COMMENT";

export const AddComment = createAction(ADDCOMMENT);

const initalState = {
  state: {
    comment: {}
  }
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case ADDCOMMENT: {
      console.log(action.payload, state.state.comment);
      return {
        state: { comment: Object.assign(state.state.comment, action.payload) }
      };
    }
    default: {
      return state;
    }
  }
}
