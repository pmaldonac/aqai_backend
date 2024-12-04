const repository = require("../repository/updateActividadFaenaRepository")

exports.updateActividadFaenaController = async(req,res) =>{
    try{
        const id = req.params.id
        const data = req.body
        if(!data){
           res.status(400).json({status:400, message:"Faltan parámetros para realizar la actualización"}) 
        }
        const Actividad = await repository.updateActividadFaenaRepository(id, data)
        res.status(200).json({status:200, message:"Actividad Actualizada", data: Actividad})

    }catch(error){
        return res.status(500).json({
            status:500,
            message: "Hubo un error al editar la Actividad"
        })
    }
}