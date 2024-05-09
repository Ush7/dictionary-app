import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div classname="Part-Speech">{props.meaning.partOfSpeech}</div>
      <div>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </div>
      <em>{props.meaning.example}</em>
      <br />
    </div>
  );
}
