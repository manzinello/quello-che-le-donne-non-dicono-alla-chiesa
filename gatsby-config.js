module.exports = {
  siteMetadata: {
    title: `Quello che le donne non dicono alla chiesa - Ilaria Beretta`,
    description: `Sono le donne che tengono in piedi la Chiesa, attraverso le più varie forme di partecipazione e impegno. Ma loro come reagiscono? Quindici donne attive nella Chiesa si confessano in questo libro di Ilaria Beretta`,
    author: `@manzinello`,
    siteUrl: `https://quellocheledonne.ilariaberetta.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39542008-29",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
