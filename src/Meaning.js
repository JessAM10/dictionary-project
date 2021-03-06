import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map((definition, index) => (
        <div key={index}>
          <h3>{props.meaning.partOfSpeech}</h3>
          <p>{definition.definition}</p>
          <p className="example">{definition.example}</p>{" "}
          <Synonyms synonyms={definition.synonyms} />
        </div>
      ))}
    </div>
  );
}
