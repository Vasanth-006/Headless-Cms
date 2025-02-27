export default [
  {
    name: 'strapi::logger',
  },
  {
    name: 'strapi::errors',
  },
  {
    name: 'strapi::security',
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://vasanth-storybook1.netlify.app'], // Replace with your actual Netlify URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow necessary HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
    },
  },
  {
    name: 'strapi::poweredBy',
  },
  {
    name: 'strapi::query',
  },
  {
    name: 'strapi::body',
  },
  {
    name: 'strapi::session',
  },
  {
    name: 'strapi::favicon',
  },
  {
    name: 'strapi::public',
  },
];
