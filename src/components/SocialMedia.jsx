import React from 'react';

import IconLink from './IconLink';

import twitterIcon from '../images/twitter.svg';
import githubIcon from '../images/github.svg';
import dockerIcon from '../images/docker.svg';
import npmIcon from '../images/npm.svg';
import mastodonIcon from '../images/mastodon.svg';
import gitlabIcon from '../images/gitlab.svg';

export default () => (
  <div className="online-presence">
    <IconLink icon={twitterIcon} alt="Twitter" href="https://twitter.com/lncnx" />
    <IconLink icon={githubIcon} alt="GitHub" href="https://github.com/lncm" />
    <IconLink icon={dockerIcon} alt="Docker" href="https://hub.docker.com/u/lncm/" />
    <IconLink icon={npmIcon} alt="NPM" href="https://www.npmjs.com/org/lncm" />
    <IconLink icon={mastodonIcon} alt="Mastodon" href="https://bitcoinhackers.org/@lncm" />
    <IconLink icon={gitlabIcon} alt="GitLab" href="https://gitlab.com/lncm/" />
  </div>
);
