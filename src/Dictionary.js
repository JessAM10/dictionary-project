import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data);
  }

  function search() {
    setLoaded(true);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelApiKey =
      "563492ad6f917000010000019113ca0408b646c985b866efac359c26";

    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=10`;

    const headers = { Authorization: `Bearer ${pexelApiKey}` };

    axios.get(pexelApiUrl, { headers }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1 className="text-center">Dictionary</h1>
          <form onSubmit={handleSubmit}>
            <h4>What word do you want to look up?</h4>
            <input
              type="search"
              onChange={updateKeyword}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <p className="suggested-words">
            suggested words: code, tea, weather...
          </p>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else load();
  return "Loading";
}
