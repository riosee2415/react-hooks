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
  <thead>
    <tr>
      <th> Argument </th>
      <th> Type </th>
      <th> Description </th>
      <th> Required </th>
    <tr>
  </thead>
  <tbody>
    <tr>
      <td> title </td>
      <td> string </td>
      <td> The title you want to use on your document </td>
      <td> YES </td>
    </tr>
  </tbody>
</table>
