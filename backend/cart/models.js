const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ItemSchema = new Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:mongoose.Types.ObjectId,
        required:true,
        min:[1,"Quantity cannot be less than 1."]
    },

    price:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
},
{timestamps:true
});

const cartSchema = new Schema({
    items:[ItemSchema],
    subTotal:{
        default:0,
        type:Number
    }
},
{timestamps:true}
);

module.exports = mongoose.model("cart", cartSchema);