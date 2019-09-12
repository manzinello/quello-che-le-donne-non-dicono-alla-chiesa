import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

import { COLORS } from "../styles/constants"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
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
        <p style={{ color: COLORS.gray, fontSize: 17 }}>
          <strong>Ilaria Beretta</strong> 26 anni, è giornalista professionista.
          Collabora con quotidiani e riviste dando spazio soprattutto a buone
          pratiche ed esperienze di solidarietà. Ha fondato il blog
          «buonenotizie.co», dove dal 2014 racconta storie positive dall’Italia
          e dall’estero. Nel 2017 ha vinto il Premio De Carli per l’informazione
          religiosa nella categoria «Giovani».
        </p>
      </div>
    </content>
  </div>
)

export default CallToAction
