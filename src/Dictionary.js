import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response);
  }
  function receiveWord(event) {
    event.preventDefault();
    alert(`Searching definition of word ${keyword}`);

    let apiKey = "3eo0fetfbb61a575e45b64ff05342834";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={receiveWord}>
        <input
          type="Search"
          placeholder="Search for a word"
          className="form-control form-control-lg"
          onChange={handleWord}
        />
      </form>
    </div>
  );
}
