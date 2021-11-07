import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true)
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search()
}

if (loaded){
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <h4>What word do you want to look up?</h4>
          <input type="search" onChange={updateKeyword} defaultValue={props.defaultKeyword}/>
        </form>
        <p className="suggested-words">
          suggested words: code, tea, weather...
        </p>
      </section>
      <Results results={results} />
    </div>
    );
  } else load()
  return "Loading"
}
