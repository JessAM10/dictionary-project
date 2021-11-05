import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null)

  function handleResponse(response) {
    setResults(response.data[0])
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <p>What word do you want to look up?</p>
        <input type="search" onChange={updateKeyword} />
        </form>
        <p>suggested words: code, tea, weather</p>
      </section>
      <Results results={results}/>
    </div>
  );
}
