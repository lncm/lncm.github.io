import React from 'react';

import IconLink from './IconLink';

import dockerIcon from '../images/docker.svg';
import githubIcon from '../images/github.svg';
import gitlabIcon from '../images/gitlab.svg';
import gitterIcon from '../images/gitter.svg';
import mastodonIcon from '../images/mastodon.svg';
import npmIcon from '../images/npm.svg';
import twitterIcon from '../images/twitter.svg';

export default () => (
  <div className="online-presence">
    <IconLink icon={twitterIcon} alt="Twitter" href="https://twitter.com/lncnx" />
    <IconLink icon={githubIcon} alt="GitHub" href="https://github.com/lncm" />
    <IconLink icon={gitterIcon} alt="Gitter" href="https://gitter.im/lcnm" />
    <IconLink icon={dockerIcon} alt="Docker" href="https://hub.docker.com/u/lncm" />
    <IconLink icon={npmIcon} alt="NPM" href="https://www.npmjs.com/org/lncm" />
    <IconLink icon={mastodonIcon} alt="Mastodon" href="https://bitcoinhackers.org/@lncm" />
    <IconLink icon={gitlabIcon} alt="GitLab" href="https://gitlab.com/lncm" />
  </div>
);
