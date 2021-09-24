import styled from "styled-components";
import { useState } from "react";

const DeleteButton = styled.button``;
const DeleteInput = styled.input``;

function DeleteComponent(props) {
  const [deletePassword, setDeletePassword] = useState("");

  const deleteFunc = password => {
    if (password === deletePassword) {
      console.log("same");
    }
  };
  return (
    <div>
      <DeleteInput
        type="password"
        value={deletePassword}
        onChange={e => setDeletePassword(e.target.value)}
      ></DeleteInput>
      <DeleteButton onClick={e => deleteFunc(props.password, props.index - 1)}>
        삭제{props.index - 1}
      </DeleteButton>
    </div>
  );
}
export default DeleteComponent;
