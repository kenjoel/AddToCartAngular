const Cart = require("./models");

exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.productId",
        select:"name price total"
    });
    return carts[0];
}

exports.addItemToCart = async payload =>{
    const itemsAdded = await Cart.create(payload);
    return itemsAdded;
}