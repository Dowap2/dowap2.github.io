import React from "react";

export function FormButton(props) {
  return (
    <div>
      <button>complete</button>
      <button onClick={e => props.onChange(true)}>cancel</button>
    </div>
  );
}
