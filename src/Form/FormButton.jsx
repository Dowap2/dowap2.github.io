import React from "react";
import { Link } from "react-router-dom";

export function FormButton(props) {
  return (
    <div>
      <button>complete</button>
      <Link to="/main">
        <button>cancel</button>
      </Link>
    </div>
  );
}
