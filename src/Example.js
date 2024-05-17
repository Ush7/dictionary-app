import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example  text-muted fst-italic">
        Example: <span className="">"{props.example}"</span>
      </div>
    );
  } else {
    return null;
  }
}
