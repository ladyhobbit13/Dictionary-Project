import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
