const { strict } = require("assert");
const { Module } = require("module");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please include the product name"];
    },

    price:{
        type:String,
        required: [true, "Please include the product price"]
    },

    image:{
        type:String,
        required:true
    }
})

const models = mongoose.model("productSchema", productSchema);

module.exports = models;