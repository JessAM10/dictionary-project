import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    const [keyword, setKeyword] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
        alert(`Searching for ${keyword}`)
    }

    function updateKeyword(event) {
        event.preventDefault()
        setKeyword(event.target.value)
        }


    
  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateKeyword} />
      </form>
    </div>
  );
    }

