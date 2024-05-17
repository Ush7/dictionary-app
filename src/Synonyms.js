import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul className="list-group list-group-horizontal-sm mt-1">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li
                className="list-group-item border border-0 p-1 text-primary"
                key={index}
              >
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
