import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div classname="Part-Speech">{props.meaning.partOfSpeech}</div>
      <div>
        <strong>Definition: </strong>
        {props.meaning.definition}
        <br />

        <Example example={props.meaning.example} />
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
        <br />
        <br />
      </div>
    </div>
  );
}
