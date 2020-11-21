const models = require("./models");

exports.allProducts = async () => {
    const products = await models.find().then(() => {
        res.status(200);
        return products;
    })

exports.productById = async (id) => {
    const product = await models.findOne(id);
    return product;
}

exports.saveProduct = async (payload) => {
    const newProduct = await models.create(payload);
    return newProduct;
}

exports.removeProduct = async id => {
    const product = await models.findByIdAndRemove(id);
    return product;
}
}