import React from "react";

import SectionHeader from "./section-header";

import dossierCatechista from "../rassegna/dossier-catechista.pdf";

import vitaTrentina from "../rassegna/vita-trentina.pdf";
import vitaTrentina2 from "../rassegna/vita-trentina-2.pdf";

let rassegna = [
  {
    link:
      "https://www.letture.org/quello-che-le-donne-non-dicono-alla-chiesa-storie-vere-di-una-relazione-complicata-ilaria-beretta/",
    title: "Letture.org",
    content:
      "'Quello che le donne non dicono alla chiesa, storie vere di una relazione complicata' di Ilaria Beretta, con intervista all'autrice del libro"
  },
  {
    link:
      "https://www.radiolombardia.it/2019/10/15/quello-che-le-donne-non-dicono-alla-chiesa/",
    title: "Radio Lombardia",
    content:
      "'Quello che le donne non dicono alla chiesa', ascolta l'intervista all'autrice del libro a Radio Lombardia"
  },
  {
    link: "http://www.vinonuovo.it/index.php?l=it&art=3495",
    title: "Vino Nuovo",
    content: "Cara Chiesa, dobbiamo parlare"
  },
  {
    link:
      "https://bibbiagiovane.it/la-rivoluzione-tranquilla-delle-donne-cristiane-comuni/",
    title: "La Bibbia giovane",
    content: "La rivoluzione tranquilla delle donne cristiane comuni"
  },
  {
    link:
      "https://magnificatnet.it/recensione-quello-che-le-donne-non-dicono-alla-chiesa-di-ilaria-beretta/",
    title: "Magnificat - Blog di donne della Chiesa ambrosiana",
    content: "RECENSIONE: 'Quello che le donne non dicono alla Chiesa'"
  },
  {
    youtube: true,
    title:
      "Quello che le donne non dicono alla Chiesa - TAVOLA ROTONDA 27 novembre 2019"
  },
  {
    link: dossierCatechista,
    title: "Dossier Catechista",
    content: "Recensione su Dossier Catechista"
  },
  {
    link: vitaTrentina,
    title: "Vita Trentina",
    content: "Il non detto delle donne (12 gennaio 2020)"
  },
  ,
  {
    link: vitaTrentina2,
    title: "Vita Trentina",
    content: "Le donne non si sentono trattate da adulte (26 gennaio 2020)"
  }
];

const Card = props => (
  <div
    className={"rassegna-card"}
    style={{ paddingBottom: props.youtube ? 0 : {} }}
  >
    {!props.youtube && (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={"full-link"}
      />
    )}
    <h4 style={{ marginBottom: 8 }}>{props.title}</h4>
    {props.youtube ? (
      <>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/oET_mhH4-Oo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ borderRadius: 8 }}
        ></iframe>
      </>
    ) : (
      <p style={{ fontSize: 15, marginBottom: 0, lineHeight: "1.2em" }}>
        {props.content}
      </p>
    )}
  </div>
);

const Rassegna = () => (
  <div style={{ padding: "0.2rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Rassegna stampa" />
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
        {rassegna.map(Card)}
      </div>
    </content>
  </div>
);

export default Rassegna;
