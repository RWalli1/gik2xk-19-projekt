const db = require("../models");
const validate = require("validate.js");

const {
    createResponseSuccess,
    createResponseError,
    createResponseMessage,
  } = require("../helpers/responseHelper");

  const constraints = {
    title: {
      length: {
        minimum: 2,
        maximum: 100,
        tooShort: "^Titeln måste vara minst %{count} tecken lång.",
        tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
      },
    },
  };


  async function getCartByUser(id) { 
  
    try {
      const cart = await db.cart.findOne({
        
       where: { id },
       include: [db.user, db.product]
      });
      return createResponseSuccess(cart); // _formatpost
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  module.exports = {
    getCartByUser
  };