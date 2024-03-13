const validate = require('validate.js');
const router = require('express').Router();
const db = require("../models");



// add product to cart 


router.post('/:id/addProduct', (req, res) => {
    const product = req.body;
    const id = req.params.id;
  
    cartService.addProduct(id, product).then((result) => {
      res.status(result.status).json(result.data);
    });
  });

// read
router.get("/", (req, res)=>{
    const id = req.params.id;
    cartService.getById(id).then((result) => { // fixa cartservice
      res.status(result.status).json(result.data);
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