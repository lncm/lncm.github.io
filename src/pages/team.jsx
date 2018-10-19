import React from 'react';
import Layout from '../components/Layout';

import IconLink from '../components/IconLink';

import { description, members } from '../data/team.toml';

import twitterIcon from '../images/twitter.svg';
import keybaseIcon from '../images/keybase.svg';
import githubIcon from '../images/github.svg';

export default () => (
  <Layout title="Team">
    <p>{description}</p>
    <div className="item-grid">
      {members.map(member => (
        <div key={member.name}>
          <img src={`https://www.gravatar.com/avatar/${member.gravatar}`} alt={member.name} />
          <h3>{member.name}</h3>
          <h4>{member.role}</h4>
          <div>
            <IconLink icon={twitterIcon} alt="Twitter" href={`https://twitter.com/${member.twitter}`} />
            <IconLink icon={githubIcon} alt="Github" href={`https://twitter.com/${member.twitter}`} />
            <IconLink icon={keybaseIcon} alt="Keybase" href={`https://twitter.com/${member.twitter}`} />
          </div>
        </div>
      ))}
    </div>
  </Layout>
);
