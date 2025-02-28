module.exports = {
  siteMetadata: {
    apiUrl: 'https://headless-cms-1-lehv.onrender.com', // Replace with your Strapi URL
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://headless-cms-1-lehv.onrender.com', // Same here
        collectionTypes: ['author', 'blog', 'category', 'user'],
      },
    },
  ],
};
