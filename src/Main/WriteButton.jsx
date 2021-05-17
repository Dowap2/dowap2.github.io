import React from "react";
import { Link } from "react-router-dom";

export function WriteButton(props) {
  return (
    <div>
      <Link to="/write">
        <button>write</button>
      </Link>
    </div>
  );
}
