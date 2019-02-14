const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
var serverConfig = require ('./config/server.config');
const routes = require('./routes');


const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);


app.listen(serverConfig.port, () => console.log(`Example app listening on port ${serverConfig.port}!`));
// app.