import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return <div className="Phonetic text-muted fs-6">/ {props.phonetic} /</div>;
  } else {
    return null;
  }
}
