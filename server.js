const app = require('./app');
const PORT = 3073;
// const mongoose = require('mongoose');
// const { dbConn, mongooseOptions } = require('./config/mongodb');


console.log('attempting to connect to MongoDB...');

// mongoose.connect(dbConn, mongooseOptions)
//     .then(res => {
//         console.log('✅ connected to MongoDB!');

//         app.listen(PORT, () => {
//             console.log('-----------------------------------');
//             console.log('App is listening on port ', PORT);
//             console.log(`view the app ====> http://localhost:${PORT}`);
//             console.log('-----------------------------------');
//         });
//     })
//     .catch(err => {
//         console.log('Could not connect to mongodb', err);
//         process.exit(1);
//     })


app.listen(PORT, () => {
    console.log('-----------------------------------');
    console.log('App is listening on port ', PORT);
    console.log(`view the app ====> http://localhost:${PORT}`);
    console.log('-----------------------------------');
});