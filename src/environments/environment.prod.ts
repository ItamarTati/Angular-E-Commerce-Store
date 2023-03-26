require('dotenv').config();
const stripeKey = process.env["STRIPE_KEY"];
const clientId = process.env["CLIENT_ID"];
const domain = process.env["Domain"];

export const environment = {
  production: false,
  stripeKey: stripeKey,
  auth: {
    clientId: clientId,
    domain: domain
  }
};