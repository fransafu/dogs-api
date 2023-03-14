const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/', userController.list);
router.post('/', userController.create);
/* router.get('/:id', userController.findOne);
router.put('/:id', userController.update); */
// router.patch('/:id', userController.partialUpdate);
/* router.delete('/:id', userController.delete); */

module.exports = router