const router = require("express").Router();
const db = require("../models");
const productService = require("../services/productService");

// Route to put/update product
router.put("/:id", (req, res) => {

  // Store product data and product ID from request body and parameters in variables
  const product = req.body;
  const id = req.params.id;

  // Call productService to update the product
  productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to delete product
router.delete("/:id", (req, res) => {

  // Store product ID from request parameters in variable
  const id = req.params.id;

  // Call productService to delete the product
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});


// Route to post/add rating to a product
router.post("/:id/addRating", (req, res) => {

  //Store rating and product ID from request body and parameters in variables
  const rating = req.body;
  const id = req.params.id;

  //Call productService to add/post rating to a product
  productService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to post a product
router.post("/", (req, res) => {

  // Store product from request body in variable
  const product = req.body;

  // Call productService to create the product
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to get all products 
router.get("/", (req, res) => {

  // Call productService to get all products
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});


// Route to get a product
router.get("/:id", (req, res) => {

  // Store the ID from request parameters in variable
  const id = req.params.id;

  // Call productService to get the product
  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
