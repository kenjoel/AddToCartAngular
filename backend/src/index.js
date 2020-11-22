
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
// const mongoose = require("../db/mongoose");

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use("/files", express.static("files"));

require("../db/mongoose")(app);
require('./routerHandler')(app);


app.get("/", (req, res) => {
    res.json({
        message:"Arise Mern Developers"
    })
    res.status(200)
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});


