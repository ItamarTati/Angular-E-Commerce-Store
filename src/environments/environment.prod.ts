export const environment = {
  production: true,
  stripeKey: process.env["STRIPE_KEY"],
  auth: {
    clientId: process.env["CLIENT_ID"],
    domain: process.env["DOMAIN"]
  }
};