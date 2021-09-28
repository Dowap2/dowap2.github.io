import React from "react";
import { connect } from "react-redux";
import * as commentState from "../../../../store/modules/commentState";
import DeleteComponent from "./DeleteComponent";

const DeleteContainer = props => {
  return (
    <DeleteComponent
      onChange={props.comment}
      blogNum={props.blogNum}
      index={props.index}
      password={props.password}
    />
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  comment: comment => dispatch(commentState.AddComment(comment)) //comment 삭제
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContainer);
