const express = require('express');
const route = require('./routes/route');
const app = express();
app.use('/', route);
const port = 3000;
app.listen(port, () => {
console.log(`App running on port ${port}...`);
});