const router = require("express").Router();
const productController = require("./controller")
const multerInstance = require("./multer");

router.post("/", multerInstance.upload.single("image"), productController.createItem);
router.get("/", productController.getAllItems);
router.get("/:id", productController.getItemById);
router.delete("/:id", productController.removeItemById);

module.exports = router;

