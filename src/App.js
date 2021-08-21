import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "grinning",
  "🥰": "feeling loved",
  "😘": "blow a kiss",
  "💪": "flexed biceps",
  "😪": "sleepy",
  "🥶": "freezing"
};
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    console.log(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this in our DB";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="interpreter">
        <em>{meaning}</em>
      </div>
      <h3>Emoji's we know</h3>
      {emojiList.map((emoji) => {
        return (
          <li
            onClick={() => emojiClickHandler(emoji)}
            className="list-format"
            key={emoji}
          >
            {emoji}
          </li>
        );
      })}
    </div>
  );
}
