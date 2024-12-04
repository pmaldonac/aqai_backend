const repository = require("../repository/updateClasificacionRepository")

exports.updateClasificacionController = async(req,res) =>{
    try{
        const id = req.params.id
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const Clasificacion = await repository.updateClasificacionRepository(id, data)
        res.status(200).json({status:200, message:"Clasificacion Actualizada", data: Clasificacion})

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar la Clasificacion"
        })
    }
}