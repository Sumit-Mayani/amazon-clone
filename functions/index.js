const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51L81SySG8HA1FTEQKVqzQuKyKcb0J4tnDavJvqeJ3Kr4JBgye4MIOFT39IMaOF028cONuzY71zRjMiK1YN1h8ocO00CbCkKV8g");

// http://localhost:5001/clone-2d55b/us-central1/api

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello from cloud"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
    // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
