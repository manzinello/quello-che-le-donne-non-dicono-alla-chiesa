import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import quello from "../images/quello-che-le-donne-non-dicono-alla-chiesa.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center", fontSize: 55 }}>
      Quello che le <span style={{ color: "#AC0D42" }}>donne</span>
      <br />
      non dicono alla <span style={{ color: "#7D5320" }}>Chiesa</span>
    </h1>
    <p style={{ textAlign: "center", maxWidth: 440, fontSize: 25 }}>
      Ilaria Beretta
    </p>
    <Button>Compra su Amazon</Button>
    <div style={{ margin: 60, width: `300px`, position: "relative" }}>
      <img src={quello} />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
