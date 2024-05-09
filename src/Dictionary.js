import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function receiveWord(event) {
    event.preventDefault();
    alert(`Searching definition of word ${keyword}`);
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
