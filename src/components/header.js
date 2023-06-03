import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <header>
      <h1>
        {data.site.siteMetadata?.title}
      </h1>
    </header>
  )
};

export default Header;
