const db = require("../models");
const validate = require("validate.js");
const productService = require('../services/productService');

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


async function addProduct(cartRow)
{
  try {
    const [newCartRow,wasCreated] = await db.cartRow.upsert(cartRow);

    return createResponseSuccess(newCartRow); // _formatpost
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getCartByUserId(id) { 
  console.log(`Fetching cart for user id: ${id}`); // Log the user id
  try {
    const cart = await db.cart.findOne({
      where:  {userId: id},
      include: [
        db.product
      ]
    }); 
    if (!cart) {
      console.log(`No cart found for user id: ${id}`); // Log if no cart is found
      return createResponseError(404, 'Cart not found');
    }
    console.log(`current cart id: ${cart.id}`); 

    return createResponseSuccess(cart); // _formatcart
  } catch (error) {
    console.log(`Error fetching cart for user id: ${id}`, error); // Log any errors
    return createResponseError(error.status, error.message);
  }
}

// get all 
async function getAll() {
  try {
    const allCarts = await db.cart.findAll();
    return createResponseSuccess(allCarts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}


  // create
  async function create(cart) {
    const invalidData = validate(cart, constraints);
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    
    try {
      const newCart = await db.cart.create(cart);
      return createResponseSuccess(newCart);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }



  // update
  async function update(cart, id) {
    const invalidData = validate(cart, constraints);
    if (!id) {
      return createResponseError(422, "Id är obligatoriskt");
    }
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    try {
      const existingCart = await db.cart.findOne({ where: { id } });
      if (!existingCart) {
        return createResponseError(404, "Hittade ingen produkt att uppdatera.");
      }
      //await _addTagToPost(existingPost, product.tags); // rating iställe
      await db.cart.update(cart, {
        where: { id },
      });
      return createResponseMessage(200, "Produkten uppdaterades.");
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }
  // delete
  async function destroy(id) {
    if (!id) {
      return createResponseError(422, "Id är obligatoriskt");
    }
    try {
      await db.cart.destroy({
        where: { id },
      });
      return createResponseMessage(200, "Produkten raderades.");
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }


function _addProductsToCart(cart,products)
{
  if (products)
  {
    products.forEach(async (product) => {
      await product.addRating(_formatProduct(product));
    });
  }
}

  function _formatCart(cart,cartRows)
  {
    cleanCart = {
      payed: cart.payed,
      cartItems: [],
      
    };

    cart.cartItems.map((cartItem) => {
      cleanCart.cartItems = [rating.rating, ...cleanProduct.ratings];
    });
    return cleanCart;
  }
  

  module.exports = {
    addProduct,
    getCartByUserId,
    create,
    update,
    destroy
  };
