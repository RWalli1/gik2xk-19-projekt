const db = require("../models");
const validate = require("validate.js");

// Helper functions
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

// Validation constraints
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

// Fetch all products with ratings
async function getAll() {
  try {
    const allProducts = await db.product.findAll({ include: [db.rating] });
    return createResponseSuccess(
      allProducts.map((product) => _formatProduct(product))
    );
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Fetch a single product by ID with ratings
async function getById(id) {
  try {
    const product = await db.product.findOne({
      where: { id },

      include: [db.rating],
    });
    return createResponseSuccess(_formatProduct(product)); // _formatpost
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Add a rating to a product
async function addRating(id, rating) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    rating.productId = id;
    const newRating = await db.rating.create(rating);
    return createResponseSuccess(newRating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Create a new product after validating data
async function create(product) {
  const invalidData = validate(product, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newProduct = await db.product.create(product);
    //post tags är en array av namn
    //lägg till eventuella ratings
    // await _addTagToPost(newProduct, product.tags);

    return createResponseSuccess(_formatProduct(newProduct));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Update an existing product by ID
async function update(product, id) {
  const invalidData = validate(product, constraints);
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.product.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Hittade ingen produkt att uppdatera.");
    }
    //await _addRatingToProduct(existingProduct, product.ratings); // rating iställe
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "Produkten uppdaterades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Delete a product by ID
async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.product.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Produkten raderades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Format product data including ratings
async function _addRatingToProduct(product, ratings) {
  await db.rating.destroy({ where: { productId: product.id } });

  if (ratings) {
    ratings.forEach(async (rating) => {
      const ratingId = await db.rating.create(rating);
      await product.addRating(ratingId);
    });
  }
}

function _formatProduct(product) {
  const cleanProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    averageRating: 0,
    ratings: [],
  };
  if (product.ratings) {
    let sum = 0;
    product.ratings.map((rating) => {
      sum += rating.rating;
      cleanProduct.ratings = [rating.rating, ...cleanProduct.ratings];
    });
    cleanProduct.averageRating =
      product.ratings.length > 0
        ? Number((sum / product.ratings.length).toFixed(1))
        : 0;
  }
  return cleanProduct;
}

module.exports = {
  _formatProduct,
  addRating,
  getById,
  getAll,
  create,
  update,
  destroy,
};
