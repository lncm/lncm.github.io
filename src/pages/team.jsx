import React from 'react';
import Layout from '../components/Layout';

import ExternalLink from '../components/ExternalLink';

import { description, members } from '../data/team.toml';

export default () => (
  <Layout>
    <h2>Team</h2>
    <p>{description}</p>
    <div className="item-grid">
      {members.map(member => (
        <div key={member.name}>
          <img src={`https://www.gravatar.com/avatar/${member.gravatar}`} alt={member.name} />
          <h3>{member.name}</h3>
          <h4>{member.role}</h4>
          <p>
            {member.twitter && <ExternalLink href={`https://twitter.com/${member.twitter}`}>Twitter</ExternalLink>}{' '}
            {member.github && <ExternalLink href={`https://twitter.com/${member.github}`}>Github</ExternalLink>}{' '}
            {member.keybase && <ExternalLink href={`https://twitter.com/${member.keybase}`}>Keybase</ExternalLink>}{' '}
          </p>
        </div>
      ))}
    </div>
  </Layout>
);
