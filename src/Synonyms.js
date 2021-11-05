import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map((synonym, index) =>
            index < 5 ? <li key={index}>{synonym}</li> : null
          )}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
