# @4leaf-Hooks/use-title

React Hooks to update your document's title.

## installation

- yarn

  <pre>
   yarn add @4leaf.ysh/use-title
  </pre>

- npm
  <pre>
   npm install @4leaf.ysh/use-title
  </pre>

## Usage

```js
import React from "react";
import useTitle from "@4leaf.ysh/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

## Arguments

<table>
<th>
  <td> Argument </td>
  <td> Type </td>
  <td> Description </td>
  <td> Required </td>
</th>
<tr>
  <td> title </td>
  <td> string </td>
  <td> The title you want to use on your document </td>
  <td> YES </td>
</table>
