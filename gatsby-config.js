module.exports = {
  siteMetadata: {
    title: `Derick Olson`,
    description: `Hi there, my name's Derick. I'm a student of languages (imperative, functional, figurative, semanto-phonetic).`,
    keywords: `derick, olson, olsonderick, dericko, writing, software`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
