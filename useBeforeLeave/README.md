```js
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);

    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const begForLife = () => console.log("don't leave!");

  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
