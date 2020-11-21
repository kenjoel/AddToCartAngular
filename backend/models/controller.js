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
            data: products,
        })
    }catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}