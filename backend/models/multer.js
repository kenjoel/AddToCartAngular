const multer = require("multer");
const path = require("path");


//Prepare to Upload Image

const storage = multer.diskStorage({
    destination:(req, res, cb) => {
        cb(null, path.join("./files/"));
    },

    __filename: (req, res, cb) => {
        cb(null,new Date().toISOString() + file.originalname);
    }
});

//check the fileType
const fileFilter = (req, file, cb) => {
    // var file = req.file.map(file => file.path);
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{
        cb(new Error("'Not an image! Please upload an image.', 400", false));
    }
}

exports.upload = multer({
    storage:storage,
    limits: {
        fieldSize:1024 * 1024 * 6
    },
    fileFilter:fileFilter
})