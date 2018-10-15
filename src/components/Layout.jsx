import React from "react";

import "normalize.css";
import "../css/index.css";

import Header from "./Header";
import MainMenu from "./MainMenu";

export default ({ children }) => (
  <div style={{
    margin: '1em auto',
    maxWidth: 650,
    padding: '2em',
    border: '1px solid #ccc',
    background: 'white'
  }}>
    <Header />
    <MainMenu />
    {children}
  </div>
)
