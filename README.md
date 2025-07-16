# PayMongoService
Microservice intended for paymongo

## PayMongo Pipeline Explanation

The PayMongo pipeline consists of the following steps:

1.  **Initialization:** The [`controllers/initialization.controller.js`](controllers/initialization.controller.js:0) handles the initialization of the PayMongo service. It sets up the necessary configurations and dependencies.
2.  **Payment Intent Creation:** The [`controllers/paymentIntentCreation.controller.js`](controllers/paymentIntentCreation.controller.js:0) handles the creation of payment intents. It receives requests from clients and interacts with the PayMongo API to create payment intents.
3.  **Response Handling:** The [`controllers/response.controller.js`](controllers/response.controller.js:0) handles the responses from the PayMongo API. It parses the responses and sends them back to the clients.
4.  **Error Handling:** The [`controllers/errorHandler.controller.js`](controllers/errorHandler.controller.js:0) handles any errors that occur during the pipeline. It logs the errors and sends appropriate error responses to the clients.
