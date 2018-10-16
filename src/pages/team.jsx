import React from "react"
import Layout from "../components/Layout"

import { description, members } from "../data/team.toml"

export default () => (
  <Layout>
    <h2>LNCM Team</h2>
    <p>{description}</p>
    {members.map(({ name }) => (
      <div key={name}>
        {name}
      </div>
    ))}
  </Layout>
)
