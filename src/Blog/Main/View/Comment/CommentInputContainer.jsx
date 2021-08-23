import React from "react";
import { connect } from "react-redux";
import * as commentState from "../../../../store/modules/commentState";
import { CommentInput } from "./CommentInput";

const CommentInputContainer = props => {
  return <CommentInput onChange={props.comment} index={props.index} />;
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  comment: comment => dispatch(commentState.AddComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer);
