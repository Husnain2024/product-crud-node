const express = require('express');
const app = express();
const routes = require('./routes/testroutes');
const routes_products = require('./routes/routes-products');
const connectDb = require('./config/config')
require('dotenv').config();

connectDb();

app.use('/', routes);
app.use('/api/products', routes_products);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
