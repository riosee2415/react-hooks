```js
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("abort!");
  const comfirmDelete = useConfirm("Are you Sure ?", deleteWorld, abort);

  return (
    <div className="App">
      <h1>hello</h1>
      <button onClick={comfirmDelete}>Delete the World</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
