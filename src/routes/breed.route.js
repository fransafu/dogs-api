const express = require('express');
const breedController = require('../controllers/breedController');

const router = express.Router();

router.get('/', breedController.list);
router.get('/:id', breedController.findById);

module.exports = router;
