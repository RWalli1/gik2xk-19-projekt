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
async function getAll() {
  try {
    const allProducts = await db.product.findAll({include: [db.rating]});
    return createResponseSuccess(allProducts.map((product) => _formatProduct(product)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getById(id) { 
  
  try {
    const product = await db.product.findOne({
      
     where: { id },
      
      include: [db.rating], // har inte fixat rating än. 
    });
    return createResponseSuccess(_formatProduct(product)); // _formatpost
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

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
    //await _addTagToPost(existingPost, product.tags); // rating iställe
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "Produkten uppdaterades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

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

function _formatProduct(product) {
  const cleanProduct = {
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      averageRating: 0,
      ratings: [],
     
    
  };
  if (product.ratings)
  {
    let sum = 0;
    product.ratings.map((rating) => {
      sum += rating.rating;
      cleanProduct.ratings = [rating.rating, ...cleanProduct.ratings];
    });
    cleanProduct.averageRating = product.ratings.length > 0 ? Number((sum / product.ratings.length).toFixed(1)) : 0;
  }
  return cleanProduct;
  };
  
module.exports = {
  _formatProduct,
  addRating,
  getById,
  getAll,
  create,
  update,
  destroy,
};
