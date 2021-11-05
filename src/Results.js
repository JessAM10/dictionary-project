import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        {props.results.phonetics.map((phonetic, index) => <div key={index}>
          <Phonetics phonetics={phonetic} />
        </div> )}
</section>
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <section>
            <Meaning meaning={meaning} />
         </section> </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
