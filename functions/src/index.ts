/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const stripe = require("stripe")(functions.config().stripe.secret);

admin.intializedApp();

const createSubscription = async (customerId, priceId) => {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });

    return subscription;
  };

  exports.createSubscription = functions.https.onCall(async (data, context) => {
    try {
      // Check if the user is authenticated
      if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'Authentication required.');
      }

      const { customerId, priceId } = data;

      // Create a subscription using the Stripe API
      const subscription = await createSubscription(customerId, priceId);

      // Update user data in Firebase with subscription details
      await admin.firestore().collection('users').doc(context.auth.uid).update({
        subscriptionStatus: 'active', // You can customize this based on your needs
        subscriptionId: subscription.id,
      });

      return { success: true, subscriptionId: subscription.id };
    } catch (error) {
      console.error('Error creating subscription:', error);
      throw new functions.https.HttpsError('internal', 'Error creating subscription.');
    }
  });
