import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="me-3">{props.phonetics.text}</span>
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon="volume-up" color="#FFCD50" size="lg" />
      </a>
    </div>
  );
}
