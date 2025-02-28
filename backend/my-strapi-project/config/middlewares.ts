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
      headers: "*",
      origin: "*", 
      // methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
      credentials: true,
    },
  },
  // we can also use it like this
  
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     origin: [
  //       'https://vasanth-storybook1.netlify.app', // Your Netlify Storybook URL
  //       'http://localhost:6006', // Local Storybook URL
  //       'http://localhost:8000' // Gatsby local dev server
  //     ],
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //     allowedHeaders: ['Content-Type', 'Authorization'],
  //     credentials: true, // Allow cookies if needed
  //   },
  // },
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
