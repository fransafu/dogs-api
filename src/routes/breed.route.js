const express = require('express');

const breedController = require('../controllers/breed.controller');

const router = express.Router();

router.get('/', breedController.list);
router.get('/:id', breedController.findById);

module.exports = router;
