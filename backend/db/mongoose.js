const mongoose = require("mongoose");

module.exports = app => {
    mongoose.connect('mongodb://localhost:27017/cart', {
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    }).then(res => console.log("we have been connected to mongo on port 27017"))
    .catch((er) =>{

        console.log(er);
    })

    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM",cleanup);
    process.on("SIGHUP", cleanup);

    if(app){
        app.set("mongoose", mongoose)
    }

    function cleanup(){
        mongoose.connection.close(() => {
            process.exit(0);
        })
    }
}