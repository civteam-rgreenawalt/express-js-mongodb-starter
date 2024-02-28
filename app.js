const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');
const { dbConn, mongooseOptions } = require('./config/mongodb');
const configureLogging = require('./config/logging');
const logger = require('./utils/logger');



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const httpLogger = morgan('dev');
app.use(httpLogger);



configureLogging();


const isTesting = process.env.NODE_ENV === 'test';

if (!isTesting) {
    mongoose.connect(dbConn, mongooseOptions)
        .then(res => {
            logger.debug('✅ connected to MongoDB');
        })
        .catch(err => {
            logger.error('Could not connect to mongodb', err);
            process.exit(1);
        })
}



app.use(routes);

module.exports = app;