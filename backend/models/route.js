const router = require("express").Router();
const productController = require("./controller")
const multerInstance = require("./multer");

router.post("/", multerInstance.upload.single("image"), productController.createItem);
router.get("/", productController.getAllItems, productController.download);
router.get("/:id", productController.getItemById);
router.delete("/:id", productController.removeItemById);
router.delete("/", productController.remove_all_items)

module.exports = router;

