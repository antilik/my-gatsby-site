import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css';

const Layout = ({pageTitle, children}) => {
  const links = [
    {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Example',
    link: '/example',
  },
];
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {
            links.map((link) => {
              return (
                <li key={link.name} className={navLinkItem}>
                  <Link to={link.link} className={navLinkText}>{link.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
};

export default Layout;
