const ItemsActivity = require("./repository");
const ProductsActivity = require("../models/repository");

// exports.getAllCartItems = async () => {
//     var allTheItems = await ItemsActivity.cart()
// }

exports.addItemsToCart = async () => {
    const{productId} = req.body;
    const{quantity} = Number.parseInt(req.body.quantity);

    try{
        let cart = await ItemsActivity.cart();
        let products = await ProductsActivity.productById(productId);
        if(!cart){
            return res.status(500).json({
                message:"There is no such item",
                type:"not found"
            })
        }
        //If item is in the cart
        if(cart){
            const existing = cart.items.findIndex(item => item.productId.id = productId);
            if(existing !== -1 && quantity <= 0){
                cart.items.splice(existing, 1)
                if(cart.items.length == 0){
                    cart.subtotal = 0
                }else{
                    cart.subtotal = cart.items.map(item => item.total).reduce((acc, next) => { acc + next});
                }
            }

            //----------Check if product exist, just add the previous quantity with the new quantity and update the total price-------
            else if (existing !== -1) {
                cart.items[existing].quantity = cart.items[indexFound].quantity + quantity;
                cart.items[existing].total = cart.items[indexFound].quantity * productDetails.price;
                cart.items[existing].price = productDetails.price
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }

            //----Check if quantity is greater than 0 then add item to items array ----
            else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: products.price,
                    total: parseInt(products.price * quantity)
                })
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }

            //----If quantity of price is 0 throw the error -------
            else {
                return res.status(400).json({
                    type: "Invalid",
                    msg: "Invalid request"
                })
            }

            let data = await cart.save();
                res.status(200).json({
                    type: "success",
                    mgs: "Process successful",
                    data: data
                })
            }

             //------------ This creates a new cart and then adds the item to the cart that has been created------------
             else {
                const cartData = {
                    items: [{
                        productId: productId,
                        quantity: quantity,
                        total: parseInt(productDetails.price * quantity),
                        price: productDetails.price
                    }],
                    subTotal: parseInt(productDetails.price * quantity)
                }
                cart = await cartRepository.addItem(cartData)
                // let data = await cart.save();
                res.json(cart);
            }

        } catch (err) {
            console.log(err)
            res.status(400).json({
                type: "Invalid",
                msg: "Something went wrong",
                err: err
            })
        }
    }

    exports.getCart = async (req, res) => {
        try {
            let cart = await cartRepository.cart()
            if (!cart) {
                return res.status(400).json({
                    type: "Invalid",
                    msg: "Cart not Found",
                })
            }
            res.status(200).json({
                status: true,
                data: cart
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                type: "Invalid",
                msg: "Something went wrong",
                err: err
            })
        }
    }


    exports.emptyCart = async (req, res) => {
        try {
            let cart = await cartRepository.cart();
            cart.items = [];
            cart.subTotal = 0
            let data = await cart.save();
            res.status(200).json({
                type: "success",
                mgs: "Cart has been emptied",
                data: data
            })
        } catch (err) {
            console.log(err)
            res.status(400).json({
                type: "Invalid",
                msg: "Something went wrong",
                err: err
            })
        }
    }


