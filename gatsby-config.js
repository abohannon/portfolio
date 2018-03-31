module.exports = {
  siteMetadata: {
    title: 'Adam Bohannon - Full-Stack Engineer / Javascript & React Developer',
    description: 'Full-stack engineer living in San Diego who loves creating user-driven experiences with Javascript and React.',
    keywords: 'full stack developer, front end developer, software engineer, web developer, javascript, react',
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
