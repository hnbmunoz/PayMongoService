// controllers/errorHandler.controller.js
module.exports = (res, error) => {
  console.error(error);
  res.status(500).send(error.message);
};