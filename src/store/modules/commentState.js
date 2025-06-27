import { createAction } from "redux-actions";

const ADDCOMMENT = "COMMENT";

export const AddComment = createAction(ADDCOMMENT);

const initialState = {
  comment: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADDCOMMENT: {
      return {
        comment: Object.assign(state.state.comment, action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
