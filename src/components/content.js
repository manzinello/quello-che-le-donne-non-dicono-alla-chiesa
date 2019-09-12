import React from "react"

import book from "../images/undraw_book_lover_mkck.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "0.2rem 1rem", textAlign: "center" }}>
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
          donna per la Chiesa è imprescindibile».{" "}
          <strong>Papa Francesco</strong> con queste parole fotografa bene la
          realtà: sono le <strong>donne</strong> che tengono in piedi la{" "}
          <strong>Chiesa</strong>, attraverso le più varie forme di
          partecipazione e impegno. Un esempio? I catechisti: in Italia l’
          <strong>80 per cento</strong> è femmina. Eppure, che siano religiose
          impegnate in parrocchia, laiche attive negli oratori o docenti negli
          istituti teologici, nella pratica delle{" "}
          <strong>realtà ecclesiali</strong> si scontrano quotidianamente con
          difficoltà, incomprensioni, <strong>disparità di trattamento</strong>.
          Ma loro come reagiscono? Che cosa pensano davvero, magari senza dirlo
          perché nessuno glielo chiede? <strong>Quindici donne</strong> attive
          nella Chiesa qui si confessano, qualche volta con critiche anche
          sferzanti nei confronti di una certa mentalità clericale, in altri
          casi offrendo <strong>idee utili</strong> al cambiamento, sempre con
          l’intento di valorizzare il meglio di una Chiesa alla cui verità e
          <strong>bellezza</strong> tutte tengono senza infingimenti né
          tornaconti. A loro la parola: <strong>ascoltiamole</strong>.
        </p>
      </div>
    </content>
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 600px))",
      }}
    >
      <div>
        <img src={book} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
