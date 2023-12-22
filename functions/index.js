const express = require("express");
const dotenv = require("dotenv");
const applyMiddleware = require("./middleware");
const apiRouter = require("./routes");
const cron = require("node-cron");
const { ENABLE_CRON, INTERVAL_INQUIRY } = require("./config/config");
const { checkOrder } = require("./controller/order");
const functions = require("firebase-functions");

dotenv.config();
const app = express();

applyMiddleware(app);

const port = process.env.PORT || 3005;

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello, Test!");
});

if (ENABLE_CRON == "true") {
  cron.schedule(INTERVAL_INQUIRY, () => {
    checkOrder();
  });
}

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// exports.finalproject_revou_fsse = functions.https.onRequest(app);

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
