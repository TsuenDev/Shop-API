const express = require('express'),
    debug = require('debug')('app:server'),
    { Config } = require('./src/config/index.js'),
    { ProductsAPI } = require('./src/models/products/index.js'),
    app = express();

app.use(express.json());

ProductsAPI(app);

//modules


app.listen(Config.port, () => {
    debug(`SERVER LISTEN PORT ${Config.port}`)
    //debug(`SERVER LISTEN PORT ${3000}`)

});