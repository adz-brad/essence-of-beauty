require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECTID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: process.env.SANITY_PROJECTID,
        dataset: process.env.SANITY_DATASET,
      },
    },
  ],
}
