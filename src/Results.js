import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  //console.log(props.wordResult);
  if (props.wordResult) {
    return (
      <div className="Results">
        <section>
          <h4 className="text-capitalize mb-1">{props.wordResult.word}</h4>
          <Phonetic phonetic={props.wordResult.phonetic} />
        </section>
        {props.wordResult.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
          // return meaning.definition;
        })}
      </div>
    );
  } else {
    return null;
  }
}
