import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log(props.wordResult);
  if (props.wordResult) {
    return (
      <div className="Results">
        <h4 className="text-capitalize mt-2">{props.wordResult.word}</h4>
        <Phonetic phonetic={props.wordResult.phonetic} />

        {props.wordResult.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
          // return meaning.definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
