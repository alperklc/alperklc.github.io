const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const port = process.env.PORT || 5000;
const app = express();

app.use(serveStatic(__dirname));
app.listen(port);

console.log('server started '+ port);
