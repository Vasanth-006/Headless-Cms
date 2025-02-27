module.exports = {
  siteMetadata: {
    apiUrl: 'https://headless-cms-1-nqq0.onrender.com', // Replace with your Strapi URL
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://headless-cms-1-nqq0.onrender.com', // Same here
      },
    },
  ],
};
