const router = require('express').Router();
const db = require("../models");
const productService = require('../services/productService');

router.post('/', (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
      res.status(result.status).json(result.data);
    });
  });


  router.get('/', (req, res) => {
    productService.getAll().then((result) => {
      res.status(result.status).json(result.data);
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    productService.getById(id).then((result) => {
      res.status(result.status).json(result.data);
    });
  });

  module.exports = router;