import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const onUpperCase = () => {
    let comingtext = text.toLocaleUpperCase();
    props.showAlert("converted to uppercase!", "success")
    setResult(comingtext);
  };

  const onLowerCase = () => {
    let comingtext = text.toLocaleLowerCase();
    setResult(comingtext);
  };

  const onReverse = () => {
    // alert(text.length)
    let rev = "";
    for (let i = text.length - 1; i >= 0; i--) {
      rev = rev + text[i];
    }
    setResult(rev);
  };

  const onchangeHandler = (event) => {
    setText(event.target.value);
  };

  const onReset = () => {
    setText("");
    setResult("")
  };

  return (
    <>
      <div className="container">
        <h>{props.heading}</h>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={onchangeHandler}
            rows={2}
            id="myTextArea"
          >
            {" "}
          </textarea>
        </div>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={onUpperCase}
        >
          Uppercase
        </button>
        <button
          type="button"
          class="btn btn-primary mx-1"
          onClick={onLowerCase}
        >
          Lowercase
        </button>
        <button type="button" class="btn btn-primary mx-1" onClick={onReverse}>
          Reverse
        </button>
        <button type="button" class="btn btn-secondary" onClick={onReset}>Clear</button>
      </div>
      <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
      <h2>Output</h2>
      <div className="bg-info">
      <p><small>{result}</small></p>
      </div>
      </div>
    </>
  );
}
