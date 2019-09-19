import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../styles/constants"

const Footer = ({ siteTitle }) => (
  <footer
    id="footer"
    style={{
      padding: "1rem",
    }}
  >
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 280px))",
        padding: "1rem 2rem",
        fontSize: ".85rem",
      }}
    >
      <div style={{ color: COLORS.blue, fontWeight: 700 }}>
        <a
          style={{ textDecoration: "none" }}
          target="_blank"
          href="https://www.ancoralibri.it"
        >
          Àncora Editrice
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {"Ilaria Beretta, "}
        <a href="https://ilariaberetta.com" target="_blank">
          ilariaberetta.com
        </a>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
