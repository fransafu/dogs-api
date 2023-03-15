const express = require('express');

const healthCheckRouter = require('./health-check.route');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const breedRouter = require('./breed.route');

const router = express.Router();

router.use('/', healthCheckRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/breeds', breedRouter);

module.exports = router
