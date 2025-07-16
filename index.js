const express = require('./controllers/initialization.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

const paymentIntentCreation = require('./controllers/paymentIntentCreation.controller');
const responseController = require('./controllers/response.controller');
const errorHandler = require('./controllers/errorHandler.controller');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/paymongo', async (req, res) => {
  try {
    const paymentIntentData = await paymentIntentCreation();
    responseController(res, paymentIntentData);
  } catch (error) {
    errorHandler(res, error);
  }
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (req, res) => {
  const healthCheckResult = {
    "status": "success",
    "message": "API is running",
    "timestamp": new Date().toISOString(),
    "environment": process.env.NODE_ENV || "development"
  };
  res.status(200).json(healthCheckResult);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});