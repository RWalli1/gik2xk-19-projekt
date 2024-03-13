const validate = require('validate.js');
const router = require('express').Router();
const db = require("../models");
const cartService = require('../services/cartService');

const constraints = {
  firstname: {
    length: {
      minimum: 2,
      maximum: 200,
      tooShort: "Förnamnet måste vara minst 2 tecken långt.",
      tooLong: "Förnamnet får inte vara längre än 200 tecken långt.",
    },
  },
  lastName: {
    length: {
      minimum: 2,
      maximum: 200,
      tooShort: "Efternamnet måste vara minst 2 tecken långt.",
      tooLong: "Efternamnet får inte vara längre än 200 tecken långt.",
    },
  },

  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-postadressen måste vara minst %{count} tecken lång.",
      tooLong: "^E-postadressen får inte vara längre än %{count} tecken lång.",
    },
    email: {
      message: "^E-postadressen är i ett felaktigt format.",
    },
  },
  password: {
    length: {
      minimum: 8,
      maximum: 35,
      tooShort: "^Password too short.",
      tooLong: "Password too long",
    },
  },
};

// GET /id/getCart
router.get("/:id/getCart", (req, res) => {
    const id = req.params.id;
    cartService.getCartByUserId(id).then((result) => {
      res.status(result.status).json(result.data);
    });
  });



// GET /users
router.get('/', async (req, res) => {
    db.user.findAll().then((result) => {
        res.send(result);
    });
});

// POST /users
router.post('/', async (req, res) => {
    const user = req.body;
    const invalidData = validate(user, constraints);
    if (invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.user.create(user).then((result) => {
            res.send(result);
        });
    }
});

// PUT /users/
router.put('/:id', async (req, res) => {
    const user = req.body;
    const invalidData = validate(user, constraints);
    const id = req.params.id;
    if (invalidData || !id) {
        res.status(400).json(invalidData || 'Id är obligatoriskt.');
    } else {
        db.user
            .update(user, {
                where: {
                    id: user.id
                }
            })
            .then((result) => {
                res.send('Användare har uppdaterats.');
            });
    }
});

// DELETE /users/

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.user.destroy({ where: { id: id } }).then(() => {
        res.json(`Användare raderades`); 
    });
});

module.exports = router;