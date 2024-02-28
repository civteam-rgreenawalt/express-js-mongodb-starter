const app = require('./app');
const PORT = 3073;

app.listen(PORT, () => {
    console.log('-----------------------------------');
    console.log('App is listening on port ', PORT);
    console.log(`view the app ====> http://localhost:${PORT}`);
    console.log('-----------------------------------');
});
