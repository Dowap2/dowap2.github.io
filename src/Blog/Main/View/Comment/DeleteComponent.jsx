import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

const DeleteButton = styled.button``;
const DeleteInput = styled.input``;

function DeleteComponent(props) {
  const [deletePassword, setDeletePassword] = useState("");
  const commentState = useSelector(state => state.commentState.state);
  const commentList = commentState.comment[props.blogNum];

  const deleteFunc = (password, index) => {
    const obj = {};
    if (password === deletePassword) {
      commentList.splice(index, 1);
      obj[props.blogNum] = commentList;
      console.log(obj);
      props.onChange(obj);
    }
  };
  return (
    <div>
      <DeleteInput
        type="password"
        value={deletePassword}
        onChange={e => setDeletePassword(e.target.value)}
      ></DeleteInput>
      <DeleteButton
        onClick={e => deleteFunc(props.password, props.index - 1)}
      ></DeleteButton>
    </div>
  );
}
export default DeleteComponent;
