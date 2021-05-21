import React from "react";

export function TextEditer(props) {
  return (
    <textarea
      name="blog"
      id=""
      cols="30"
      rows="10"
      value={props.text}
      onChange={e => props.setText(e.target.value)}
    ></textarea>
  );
}
