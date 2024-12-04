const repository = require("../repository/updateInmersionRepository")

exports.updateInmersionController = async(req,res) =>{
    try{
        const { idFaena, idBuzo } = req.params
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const Inmersion = await repository.updateInmersionRepository(idBuzo, idFaena, data)
        res.status(200).json({status:200, message:"Inmersión Actualizada", data: Inmersion})

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar la Inmersión"
        })
    }
}