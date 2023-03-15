const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use('/', router);

module.exports = app;
