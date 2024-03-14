const validate = require('validate.js');
const router = require('express').Router();
const db = require("../models");
const cartService = require('../services/cartService');

// add product to cart /cart/addProduct 


router.post('/addProduct', (req, res) => { // produkt blir en cartRow i när 
  const cartRow = req.body; // Example adjustment
    cartService.addProduct(cartRow).then((result) => {
      res.status(result.status).json(result.data);
    });
  });



// get all
  router.get('/', async (req, res) => {
    db.cart.findAll().then((result) => {
        res.send(result);
    });
});

// create
router.post('/', (req, res) => {
    const cart = req.body;
    cartService.create(cart).then((result) => {
      res.status(result.status).json(result.data);
    });
  });


// delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    cartService.destroy(id).then((result) => {
      res.status(result.status).json(result.data);
    });
  });

// update
  router.put('/:id', (req, res) => {
    const cart = req.body;
    const id = req.params.id;
  
    cartService.update(cart, id).then((result) => {
      res.status(result.status).json(result.data);
    });
  });


  module.exports = router;