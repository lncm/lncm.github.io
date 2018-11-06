import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import twitterIcon from '../images/twitter.svg';
import keybaseIcon from '../images/keybase.svg';
import githubIcon from '../images/github.svg';

import Layout from '../components/Layout';
import IconLink from '../components/IconLink';

import { description, members } from '../data/team.toml';

export default ({ data: { allFile: { edges: images } } }) => {
  // merge team images with team members
  const team = members.map((m) => {
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
