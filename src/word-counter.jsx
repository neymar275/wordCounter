import React, { useState, useEffect } from "react";

function WordCounter() {
  const [word, setWord] = useState(0);
  const [letter, setLetter] = useState("");
  const [spaces, setSpace] = useState("");
  function handleChange(event) {
    let worder = event.target.value.split(" ");
    console.log(worder);
    setWord(worder.length);
    setLetter(event.target.value.length);
    setSpace(worder.length - 1);
  }

  return (
    <div className="maincontainer">
      <h1>Word Counter</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Paste text here...."
        className="edit-text"
      />
      <p>Word Count :{word}</p>
      <p>Letter Count :{letter}</p>
      <p>Number of Spaces:{spaces}</p>
    </div>
  );
}

export default WordCounter;
