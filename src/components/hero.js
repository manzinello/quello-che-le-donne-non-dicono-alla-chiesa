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
    <strong style={{ fontSize: 22, color: "#AC0D42" }}>
      In libreria dal 1 ottobre!
    </strong>
    <br />
    {false && (
      <a
        className="button"
        href="https://amzn.to/2UOl2DG"
        target="_blank"
        style={{
          margin: 5,
          padding: ".5rem 2.5rem",
          color: "white",
          fontWeight: 700,
          background: "#AC0D42",
          borderRadius: BORDER_RADIUS,
          borderWidth: 0,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Compra su Amazon
      </a>
    )}
    <a
      className="button"
      href="https://books.google.it/books?id=r2KmDwAAQBAJ&lpg=PP1&ots=zRXvTCQqe5&dq=quello%20che%20le%20donne%20non%20dicono%20alla%20chiesa&hl=it&pg=PP1#v=onepage&q=quello%20che%20le%20donne%20non%20dicono%20alla%20chiesa&f=false"
      target="_blank"
      style={{
        margin: 5,
        padding: ".5rem 2.5rem",
        color: "white",
        fontWeight: 700,
        background: "#AC0D42",
        borderRadius: BORDER_RADIUS,
        borderWidth: 0,
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      Leggi su Google Libri
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
