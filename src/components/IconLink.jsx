import React from 'react';
import ExternalLink from './ExternalLink';

export default ({ icon, alt, className, ...props }) => (
  <ExternalLink {...props} title={alt} className={`icon-link ${className || ''}`}>
    <img src={icon} alt={alt} />
  </ExternalLink>
);
