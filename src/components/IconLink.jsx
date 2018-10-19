import React from 'react';
import ExternalLink from './ExternalLink';

export default ({ icon, alt, className, ...props }) => (
  <ExternalLink {...props} className={`icon-link ${className || ''}`}>
    <img src={icon} alt={alt} />
  </ExternalLink>
);
