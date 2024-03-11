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
    const allProducts = await db.product.findAll();
    return createResponseSuccess(allProducts); // mappa och _formatpost
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getById(id) { 
  
  try {
    //console.log("wanted id is: " + id);
    const product = await db.product.findOne({
      
     where: { id },
      
    //  include: [db.rating], // har inte fixat rating än. 
    });
    //console.log(product.title);
    return createResponseSuccess(product); // _formatpost
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
/*
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
}*/

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

    return createResponseSuccess(newProduct);
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
    if (!existingPost) {
      return createResponseError(404, "Hittade inget inlägg att uppdatera.");
    }
    //await _addTagToPost(existingPost, product.tags); // rating iställe
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "Inlägget uppdaterades.");
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
    return createResponseMessage(200, "Inlägget raderades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  destroy,
};
