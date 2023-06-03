import * as React from 'react';
import { graphql } from "gatsby";

import Layout from "../layouts/layout";

import Seo from "../components/seo";
import {StaticImage} from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Blog = ({ data }) => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
      </Layout>
      <StaticImage
        alt="nice dog"
        src="../images/nature.jpg"
      />
      <div>
        {
          data.allMdx.nodes.map(node => {
            return (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2>
                <p>Posted: {node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </article>
            )
          })
        }
      </div>
    </main>

  );
};
export const query = graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC }}) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          id
          excerpt
        }
      }
    }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default Blog;
