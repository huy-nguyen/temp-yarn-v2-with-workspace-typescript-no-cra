import React from 'react';
import ReactDOM from 'react-dom'


const getString = (name: string) => `Hello ${name}!`;

ReactDOM.render(
  <div>{getString("World")}</div>,
  document.getElementById("app")
)

