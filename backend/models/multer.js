const multer = require("multer");
const path = require("path");


//Prepare to Upload Image

const storage = multer.diskStorage({
    destination:(req, res, cb) => {
        cb(null, path.join("./files/"));
    },

    __filename: (req, res, cd) => {
        cb(null,new Date().toISOString() + file.originalname);
    }
});

//check the fileType
const fileFilter = (req, res, cb) => {
    if(file.mimetype.startswith("image")){
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