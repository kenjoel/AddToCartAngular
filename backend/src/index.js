
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// const mongoose = require("../db/mongoose");
require("../db/mongoose")(app);
require('./routerHandler')(app);
app.use(morgan("dev"));


app.use("/files", express.static("files"));



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


