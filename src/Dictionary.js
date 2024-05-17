import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [wordResult, setWordResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    //console.log(response);
    setWordResult(response.data);
    //console.log(response.data.meanings[0].definition);
  }
  function search() {
    let apiKey = "3eo0fetfbb61a575e45b64ff05342834";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function receiveWord(event) {
    event.preventDefault();
    search();
    //alert(`Searching definition of word ${keyword}`);
  }
  function handleWord(event) {
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
        <form onSubmit={receiveWord}>
          <input
            type="Search"
            placeholder="Search for a word "
            className="form-control form-control-lg"
            onChange={handleWord}
          />
        </form>
        <Results wordResult={wordResult} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
