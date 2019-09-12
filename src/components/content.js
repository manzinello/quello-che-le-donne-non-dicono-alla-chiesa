import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Storie vere di una relazione complicata" />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <div>
        <p style={{ color: COLORS.gray }}>
          «La Chiesa non può essere se stessa senza la donna e il suo ruolo. La
          donna per la Chiesa è imprescindibile». Papa Francesco con queste
          parole fotografa bene la re- altà: sono le donne che tengono in piedi
          la Chiesa, attra- verso le più varie forme di partecipazione e
          impegno. Un esempio? I catechisti: in Italia l’80 per cento è femmina.
          Eppure, che siano religiose impegnate in parrocchia, laiche attive
          negli oratori o docenti negli istituti teologici, nella pratica delle
          realtà ecclesiali si scontrano quotidianamen- te con difficoltà,
          incomprensioni, disparità di trattamento. Ma loro come reagiscono? Che
          cosa pensano davvero, magari senza dirlo perché nessuno glielo chiede?
          Quindici donne attive nella Chiesa qui si confessano, qualche vol- ta
          con critiche anche sferzanti nei confronti di una certa mentalità
          clericale, in altri casi offrendo idee utili al cam- biamento, sempre
          con l’intento di valorizzare il meglio di una Chiesa alla cui verità e
          bellezza tutte tengono senza infingimenti né tornaconti. A loro la
          parola: ascoltiamole.
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>What you need to Start</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
