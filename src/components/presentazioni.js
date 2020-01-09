import React from "react";

import SectionHeader from "./section-header";
import { COLORS } from "../styles/constants";

import trento from "../images/quellocheledonne_trento.jpg";
import trentoPDF from "../assets/quellocheledonne_trento.pdf";

const Card = props => (
  <div className={"presentazione-card"}>
    <a target="_blank" href={trentoPDF}>
      <img
        className="copertina"
        src={trento}
        style={{ borderRadius: 8, maxWidth: 300 }}
      />
    </a>
  </div>
);

const Rassegna = () => (
  <div
    style={{ padding: "0.2rem 1rem", marginBottom: 30, textAlign: "center" }}
  >
    <SectionHeader title="Presentazioni" />
    <content
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 700,
        margin: "auto"
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
          maxWidth: 700
        }}
      >
        <Card />
      </div>
    </content>
  </div>
);

export default Rassegna;
