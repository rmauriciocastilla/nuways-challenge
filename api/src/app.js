const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const crud = require('./routes/index');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(
    cors({
        origin: "*",
      credentials: true,
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization'],
    })
); 

app.use('/api',crud);

module.exports = app;