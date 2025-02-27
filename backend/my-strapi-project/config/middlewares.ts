export default {
  settings: {
    cors: {
      origin: ['https://vasanth-storybook1.netlify.app'], // Replace with your actual Netlify URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow the necessary HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'],  // Allow necessary headers
    },
  },
};
// export default [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];