import React from "react"
import { Link } from "gatsby"

import MainMenu from "./MainMenu";

import logo from "../images/logo.png"

export default () => (
  <header id="main-header">
    <Link to="/">
      <img src={logo} alt="LNCM Logo" className="logo" />
    </Link>
    <h1>
      LNCM
      <br />
      <small>Lightning Network Chiang Mai</small>
    </h1>
    <MainMenu />
  </header>
)
