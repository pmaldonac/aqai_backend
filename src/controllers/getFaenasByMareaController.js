const repository = require("../repository/getFaenasByMareaRepository")

exports.getFaenasByMareaController = async(req,res) =>{
    try{
        const idMarea = req.params.id
        let FaenaList = await repository.getFaenasByMareaRepository(idMarea)
        return res.status(200).json({status:200, data:FaenaList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las faenas."})
    }
}