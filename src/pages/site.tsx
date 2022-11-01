import * as React from 'react';

export interface SiteProps {
  children: React.ReactNode
}

export const Site : React.FC<SiteProps> = ({ children }) => {
  return <div className="site">{children}</div>;
}
