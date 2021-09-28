import { useState } from "react";
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";
import styled from "styled-components";

const CommentInputComponent = styled.div`
  width: 980px;
  margin: auto;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;
const CommentInputText = styled.input`
  width: 768px;
  height: 98px;
  padding: 16px 16px 24px 16px;
  box-sizing: border-box;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
  @media only screen and (max-width: 960px) {
    width: 100%;
  }
`;

const CommentInputUserName = styled.input`
  width: 100px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
`;

const CommentInputPassword = styled.input`
  width: 100px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
`;
const InfoInput = styled.div`
  margin-top: 10px;
`;
const ConfirmButton = styled.button`
  width: 100px;
  height: 32px;
  border: 0px;
  border-radius: 5px;
  color: #ffffff;
  background: #2770f5;
`;

export function CommentInput(props) {
  const [comment, setComment] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const commentState = useSelector(state => state.commentState.state.comment);
  const index = props.index;
  const intl = useIntl();

  const Confirm = () => {
    if (userName === "" || password === "") {
      alert("user, password is null");
    } else {
      const key = index;
      const obj = {};
      const date = GetDate();
      const commentList =
        commentState[props.index] === undefined
          ? [
              {
                user: userName,
                comment: comment,
                date: date,
                password: password
              }
            ]
          : commentState[props.index].concat([
              {
                user: userName,
                comment: comment,
                date: date,
                password: password
              }
            ]);
      obj[key] = commentList;
      props.onChange(obj);
      ResetInput();
    }
  };

  const ResetInput = () => {
    setComment("");
    setUserName("");
    setPassword("");
  };

  const GetDate = () => {
    const date = new Date().toLocaleString();

    return date;
  };

  return (
    <CommentInputComponent>
      <CommentInputText
        type="text"
        value={comment}
        placeholder={intl.formatMessage({
          id: "Comment.inputText.placeholder"
        })}
        onChange={e => setComment(e.target.value)}
      />
      <InfoInput>
        <CommentInputUserName
          type="text"
          placeholder={intl.formatMessage({
            id: "Comment.inputUsername.placeholder"
          })}
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <CommentInputPassword
          type="password"
          placeholder={intl.formatMessage({
            id: "Comment.inputPassword.placeholder"
          })}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ConfirmButton onClick={Confirm}>
          {intl.formatMessage({
            id: "Comment.confirm.btn"
          })}
        </ConfirmButton>
      </InfoInput>
    </CommentInputComponent>
  );
}
