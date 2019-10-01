import React from "react"
import PropTypes from "prop-types"

import { BORDER_RADIUS } from "../styles/constants"
import headerImage from "../images/wave-header.svg"
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
        // backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
      }}
    />
    <h1 style={{ textAlign: "center", fontSize: 55 }}>
      Quello che le <span style={{ color: "#AC0D42" }}>donne</span>
      <br />
      non dicono alla <span style={{ color: "#7D5320" }}>Chiesa</span>
    </h1>
    <p style={{ textAlign: "center", maxWidth: 440, fontSize: 25 }}>
      di <strong>Ilaria Beretta</strong>
    </p>
    <strong style={{ fontSize: 22, color: "#AC0D42", textAlign: "center" }}>
      In libreria dal 1 ottobre!
    </strong>
    <br />
    <a
      className="button ancora-libri"
      href="https://www.ancoralibri.it/index.php?route=product/product&product_id=8477"
      target="_blank"
      style={{
        margin: 5,
        textAlign: "center",
        padding: ".5rem 2.5rem",
        color: "white",
        fontWeight: 700,
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      Acquista su Àncora Editrice
    </a>
    <a
      className="button amazon"
      href="https://amzn.to/2oR2qao"
      target="_blank"
      style={{
        margin: 5,
        textAlign: "center",
        padding: ".5rem 2.5rem",
        color: "white",
        fontWeight: 700,
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      Acquista su Amazon
    </a>
    <a
      className="button ibs"
      href="https://www.ibs.it/quello-che-donne-non-dicono-libro-ilaria-beretta/e/9788851421830"
      target="_blank"
      style={{
        margin: 5,
        textAlign: "center",
        padding: ".5rem 2.5rem",
        color: "white",
        fontWeight: 700,
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      Acquista su IBS
    </a>
    <div
      style={{
        marginTop: 60,
        width: `500px`,
        maxWidth: "100%",
        position: "relative",
      }}
    >
      <img className="copertina" style={{ borderRadius: 10 }} src={quello} />
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
