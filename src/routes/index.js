const express = require('express');

const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const breedRouter = require('./breed.route');

const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/breeds', breedRouter);

module.exports = router