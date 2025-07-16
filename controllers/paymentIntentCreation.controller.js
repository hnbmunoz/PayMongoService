// controllers/paymentIntentCreation.controller.js
module.exports = async () => {
  try {
    // Mocked paymentIntent data
    const paymentIntentData = {
      id: 'mocked_payment_intent_id',
      amount: 10000,
      currency: 'PHP',
      status: 'created',
    };

    return paymentIntentData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};