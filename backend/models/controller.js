const repositoryData = require("./repository");

exports.createItem = async (req, res) => {
    try{
        let payload = {
            name: req.body.name,
            price: req.body.price,
            image: req.file.path
        }

    const doIt = await repositoryData.saveProduct({...payload})

    res.status(200).json({
        status: true,
        data: doIt
    })
    } catch(err){
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getAllItems = async (req, res) => {

    try{
        const theItems = await repositoryData.allProducts();
        res.status(200).json({
            status: true,
            data: theItems,
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}


exports.download = (req, res, next) => {
    console.log('fileController.download: started')
    const path = req.body.path
    const file = fs.createReadStream(path)
    const filename = (new Date()).toISOString()
    res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
    file.pipe(res)
  }
  

exports.getItemById = async (req, res) => {
    try{
        let id = req.params.id;
        let productDetails = await repositoryData.productById(id);
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}


exports.removeItemById = async (req, res) => {
    try{
        let id = req.params.id;
        let productDetails = await repositoryData.removeProduct(id);
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}


exports.remove_all_items = async (req, res) => {
    try{
        let Details = await repositoryData.removeAllProducts();
        res.status(200).json({
            status: true,
            data: Details,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}



