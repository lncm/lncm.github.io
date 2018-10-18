import React from "react"

export default (props) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {props.children}
  </a>
);
