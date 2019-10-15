import React from "react"

import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

let rassegna = [
  {
    link:
      "https://www.letture.org/quello-che-le-donne-non-dicono-alla-chiesa-storie-vere-di-una-relazione-complicata-ilaria-beretta/",
    title: "Letture.org",
    content:
      "'Quello che le donne non dicono alla chiesa, storie vere di una relazione complicata' di Ilaria Beretta, con intervista all'autrice del libro",
  },
  {
    link:
      "https://www.radiolombardia.it/2019/10/15/quello-che-le-donne-non-dicono-alla-chiesa/",
    title: "Radio Lombardia",
    content:
      "'Quello che le donne non dicono alla chiesa', ascolta l'intervista all'autrice del libro a Radio Lombardia",
  },
]

const Card = props => (
  <div className={"rassegna-card"}>
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={"full-link"}
    />
    <h4>{props.title}</h4>
    <p style={{ fontSize: 15 }}>{props.content}</p>
  </div>
)

const Rassegna = () => (
  <div style={{ padding: "0.2rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Rassegna stampa" />
    <content
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 700,
        }}
      >
        {rassegna.map(Card)}
      </div>
    </content>
  </div>
)

export default Rassegna
