import React, { useState } from "react";
import { TextEditer } from "./TextEditer";
import { FormButtonContainer } from "./FormButtonContainer";

export function Form() {
  const [text, setText] = useState("");
  const onClickFunc = () => {
    console.log(1);
  };
  return (
    <div>
      <TextEditer text={text} setText={setText} />
      <FormButtonContainer click={onClickFunc} />
    </div>
  );
}
