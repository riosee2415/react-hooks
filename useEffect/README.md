# Description

<pre>
    useEffect  almost same -> componentDidMount.
</pre>

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const sayHello = () => console.log("hello");

  // first param : function(like componentDidMount...)
  // second param : deps(checking the exist that in this list)

  const [number, setNumber] = useState(0);
  const [aNumber, aSetNumber] = useState(0);

  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <div>hello</div>
      <button onClick={() => setNumber(number + 1)}> {number} </button>
      <button onClick={() => aSetNumber(aNumber + 1)}> {aNumber} </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
