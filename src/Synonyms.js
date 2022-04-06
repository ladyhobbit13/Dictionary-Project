import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span className="Synonym">
              <strong>Synonyms</strong>
              <li key={index}>{synonym}</li>
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
