const dbConnections = {
    local: 'mongodb://127.0.0.1:27018/randomDB',
    bookstore: 'mongodb://127.0.0.1:27017/Bookstore',
    gettingStartedDb: 'mongodb://127.0.0.1:27017/gettingStartedDb'
}

const dbConn = dbConnections.gettingStartedDb;
const mongooseOptions = {};


module.exports = {
    dbConn,
    mongooseOptions
}