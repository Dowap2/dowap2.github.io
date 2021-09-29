import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

const DeleteButton = styled.button`
  width: 60px;
  height: 20px;
  background: red;
  border: 0;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;
const DeleteInput = styled.input``;
const DeleteContainer = styled.div`
  margin-left: auto;
`;

function DeleteComponent(props) {
  const [deletePassword, setDeletePassword] = useState("");
  const commentState = useSelector(state => state.commentState.state);
  const commentList = commentState.comment[props.blogNum];
  const [isDeleteButtonView, setIsDeleteButtonView] = useState(false);

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
    <DeleteContainer>
      {isDeleteButtonView === false ? (
        <DeleteButton onClick={e => setIsDeleteButtonView(!isDeleteButtonView)}>
          삭제
        </DeleteButton>
      ) : (
        <div>
          <DeleteInput
            type="password"
            value={deletePassword}
            onChange={e => setDeletePassword(e.target.value)}
          ></DeleteInput>
          <DeleteButton
            onClick={e => deleteFunc(props.password, props.index - 1)}
          >
            삭제
          </DeleteButton>
        </div>
      )}
    </DeleteContainer>
  );
}
export default DeleteComponent;
