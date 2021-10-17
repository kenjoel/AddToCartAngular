const productSchema = require("./models");

exports.allProducts = async () => {
    const products = await productSchema.find();
        // res.status(200);
        return products;
}

exports.productById = async (id) => {
    const product = await productSchema.findById(id);
    return product;
}

exports.saveProduct = async (payload) => {
    const newProduct = await productSchema.create(payload);
    return newProduct;
}

exports.removeProduct = async id => {
    const product = await productSchema.findByIdAndRemove(id);
    return product;
}

exports.removeAllProducts = async () => {
    const eradicate = await productSchema.deleteMany({})
    return eradicate

}