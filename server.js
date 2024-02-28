const app = require('./app');
const PORT = 3073;

console.log('attempting to connect to MongoDB...');

app.listen(PORT, () => {
    console.log('-----------------------------------');
    console.log('App is listening on port ', PORT);
    console.log(`view the app ====> http://localhost:${PORT}`);
    console.log('-----------------------------------');
});
