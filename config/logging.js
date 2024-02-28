const log4js = require('log4js');


const configureLogging = () => {

    // Configure the logging
    const log4jsConfig = {
        appenders: {
            console: { type: 'stdout', layout: { type: 'colored' } }
        },
        categories: {
            default: {
                appenders: ['console'],
                level: 'trace'
            }
        }
    };

    log4js.configure(log4jsConfig);
}

module.exports = configureLogging;