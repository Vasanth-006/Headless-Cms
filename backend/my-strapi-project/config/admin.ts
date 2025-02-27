import { env } from "process";

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

console.log("ADMIN_JWT_SECRET:", process.env.ADMIN_JWT_SECRET);
console.log("API_TOKEN_SALT:", process.env.API_TOKEN_SALT);
console.log("TRANSFER_TOKEN_SALT:", process.env.TRANSFER_TOKEN_SALT);

