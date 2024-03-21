const validate = require("validate.js");
const router = require("express").Router();
const db = require("../models");
const cartService = require("../services/cartService");

// Route to add/post product to cart
router.post("/addProduct", (req, res) => {
  // Variable to store the request body
  const cartRow = req.body;

  // Call cartService to add product to cart
  cartService.addProduct(cartRow).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to get all carts
router.get("/", async (req, res) => {
  // Call cartService to get all carts
  cartService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to create/post a new cart
router.post("/", (req, res) => {
  const cart = req.body;

  // Call cartService to create/post a new cart
  cartService.create(cart).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to delete a cart
router.delete("/:id", (req, res) => {
  // Store cart ID from request parameters
  const id = req.params.id;

  // Call cartService to delete cart
  cartService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Route to update a cart
router.put("/:id", (req, res) => {
  // Store cart data and cart ID from request body and parameters in variables
  const cart = req.body;
  const id = req.params.id;

  // Call cartService to update the cart
  cartService.update(cart, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
