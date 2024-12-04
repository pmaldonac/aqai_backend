const repository = require("../repository/updateBuzoRepository")

exports.updateBuzoController = async(req,res) =>{
    try{
        const id = req.params.id
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const buzo = await repository.updateBuzoRepository(id, data)
        res.status(200).json({status:200, message:"Buzo Actualizado", data: buzo})

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar al Buzo"
        })
    }
}