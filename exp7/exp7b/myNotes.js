const express = require('express');
const router = require('./Routes/route1');
const app = express();
const mylogger = function (req, res, next) {
    console.log(`Req method is ${req.method}`);
    console.log(`Req url is ${req.url}`);
    next();
    };
app.use(mylogger);
app.use('/', router);
app.listen(3000);
console.log('Server listening in port 3000');