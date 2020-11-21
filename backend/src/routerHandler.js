const productRoutes = require("../models/route");

module.exports = app => {
    app.use("/product", productRoutes)
}