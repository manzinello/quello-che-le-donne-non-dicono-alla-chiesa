/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import background from "../images/quello-che-le-donne-non-dicono-alla-chiesa-background.jpg"

import Footer from "./footer"
import "../styles/style.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            padding: "0 1rem",
          }}
        >
          <main>
            <div
              style={{
                position: "fixed",
                zIndex: -1,
                opacity: 0.08,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundImage: "url(" + background + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
            {children}
          </main>
        </div>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
