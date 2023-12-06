
import { getStripePayments } from "@invertase/firestore-stripe-payments";
import { app } from "./firebase";

export const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "users",
});
