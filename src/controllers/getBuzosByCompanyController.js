const repository = require("../repository/getBuzosByCompanyRepository")

exports.getBuzosController = async(req,res) =>{
    try{
        const company = req.params.company
        let BuzosList = await repository.getBuzoRepository(company)
        return res.status(200).json({status:200, data:BuzosList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar los buzos."})
    }
}