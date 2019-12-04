```js
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = callback => {
  const element = useRef();

  const tiggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, tiggerFull, exitFull };
};

const App = () => {
  const onFulls = isFull => {
    console.log(isFull ? "We are Full" : "We are small");
  };

  const { element, tiggerFull, exitFull } = useFullscreen(onFulls);

  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          width="220"
          src="https://t1.daumcdn.net/news/201704/20/mbn/20170420163220407lfsf.jpg"
        />
        <button onClick={exitFull}>exitFullscreen</button>
      </div>
      <button onClick={tiggerFull}>Make Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
