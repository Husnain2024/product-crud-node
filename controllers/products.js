
const Product = require('../models/product')

const getAllProducts = async (req,res) => {
    const items = await Product.find({});
    res.status(200).json({items})
}


module.exports = {getAllProducts}