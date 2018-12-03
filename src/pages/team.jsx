import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import twitterIcon from '../images/twitter.svg';
import keybaseIcon from '../images/keybase.svg';
import githubIcon from '../images/github.svg';

import Layout from '../components/Layout';
import IconLink from '../components/IconLink';

import { description, members } from '../data/team.toml';

const membersUrl = 'https://api.github.com/orgs/lncm/public_members';
const memberUrl = 'https://api.github.com/users/';

export default ({ data: { allFile: { edges: images } } }) => {
  fetch(membersUrl)
    .then(response => response.json())
    .then(members2 => Promise.all(members2.map(({ login }) => fetch(`${memberUrl}${login}`)
      .then(response => response.json()))))
    .then(x => console.log(x));

  // console.log(user.login, user.avatar_url, user.html_url, user.name, user.blog, user.bio,
  // user.public_repos);

  // merge team images with team members
  const team = members.map((m) => {
    console.log(members);
    const image = images.find(({ node: { name } }) => name === m.image);
    return { ...m, image: image && image.node.childImageSharp };
  });
  return (
    <Layout title="Team">
      <p>{description}</p>
      <div className="item-grid">
        {team.map(member => (
          <div key={member.name}>
            {member.image && <Img fluid={member.image.fluid} alt={member.name} />}
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
};

export const query = graphql`query { ...TeamImagesQuery }`;
