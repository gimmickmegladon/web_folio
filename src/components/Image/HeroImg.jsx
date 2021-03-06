import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const HeroImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

HeroImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default HeroImg;
