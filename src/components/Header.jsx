import React from "react"
import { Link } from "gatsby"

import logo from "../images/logo.png"

export default () => (
  <header style={{ textAlign: 'center' }}>
    <Link to="/">
      <img src={logo} alt="LNCM Logo" style={{ maxWidth: '100%', width: '100px' }} />
    </Link>
    <h1 style={{ margin: 0, lineHeight: '1em' }}>
      LNCM
      <br />
      <span style={{ fontSize: '0.5em' }}>Lightning Network Chiang Mai</span>
    </h1>
  </header>
)
