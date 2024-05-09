import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.wordResult);
  if (props.wordResult) {
    return (
      <div className="Results">
        <h4>Word: {props.wordResult.word}</h4>
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
