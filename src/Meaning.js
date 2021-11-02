import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <h3>{props.meaning.partOfSpeech}</h3>
          <p>{definition.definition}</p>
          <p>{definition.example}</p>{" "}
        </div>
      ))}
    </div>
  );
}
