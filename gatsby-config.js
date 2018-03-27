module.exports = {
  siteMetadata: {
    title: 'Adam Bohannon - Full-Stack Engineer / Javascript & React Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
