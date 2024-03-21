const db = require("../models");
const validate = require("validate.js");
const productService = require("../services/productService");

// Helper functions for creating response objects
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

// Validation constraints for cart creation and updating
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

// Deletes all products from a cart by cart ID
async function deleteProducts(id) {
  try {
    console.log(`deleting rows in cart id: ${id}`);
    const cartRows = await db.cartRow.destroy({
      where: {
        cartId: id,
      },
    });
    return createResponseSuccess("successfully deleted the product.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Adds a product to a cart, or updates quantity if it already exists
async function addProduct(cartRow) {
  try {
    const existingCartRow = await db.cartRow.findOne({
      where: {
        cartId: cartRow.cartId,
        productId: cartRow.productId,
      },
    });

    if (existingCartRow) {
      // If an existing cartRow is found, increment its amount
      const updatedAmount = existingCartRow.amount + cartRow.amount;
      await existingCartRow.update({ amount: updatedAmount });
      return createResponseSuccess(existingCartRow);
    } else {
      // If no existing cartRow is found, create a new one
      const newCartRow = await db.cartRow.create(cartRow);
      return createResponseSuccess(newCartRow);
    }
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Fetches a cart by user ID, including the products in the cart
async function getCartByUserId(id) {
  console.log(`Fetching cart for user id: ${id}`); // Log the user id
  try {
    const cart = await db.cart.findOne({
      where: { userId: id },
      include: [db.product],
    });
    if (!cart) {
      console.log(`No cart found for user id: ${id}`); // Log if no cart is found
      return createResponseError(404, "Cart not found");
    }
    console.log(`current cart id: ${cart.id}`);

    return createResponseSuccess(_formatCart(cart)); // _formatcart
  } catch (error) {
    console.log(`Error fetching cart for user id: ${id}`, error); // Log any errors
    return createResponseError(error.status, error.message);
  }
}

// Fetches all carts, including the products in each cart
async function getAll() {
  try {
    const allCarts = await db.cart.findAll({
      include: [db.product],
    });
    return createResponseSuccess(allCarts.map((cart) => _formatCart(cart)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Creates a new cart
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

// Updates an existing cart by ID
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
// Deletes a cart by ID
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


// format output data of the cart. Also include ratings 
function _formatCart(cart) {
  cleanCart = {
    id: cart.id,
    payed: cart.payed,
    cartItems: [],
  };
  if (cart.products) {
    cart.products.map((cartItem) => {
      const newCartItem = {
        productId: cartItem.id,
        title: cartItem.title,
        description: cartItem.description,
        price: cartItem.price,
        imageUrl: cartItem.imageUrl,
        amount: cartItem.cartRow.amount,
      };
      cleanCart.cartItems = [newCartItem, ...cleanCart.cartItems];
    });
  }
  return cleanCart;
}

module.exports = {
  deleteProducts,
  getAll,
  addProduct,
  getCartByUserId,
  create,
  update,
  destroy,
};
