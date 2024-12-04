const repository = require("../repository/getActividadFaenaByClasificacionRepository")

exports.getActividadesFaenaByClasificacion = async(req,res) =>{
    try{
        const idClasificacion = req.params.id
        let ClasificacionList = await repository.getActicidadesFaenasByClasificacionRepository(idClasificacion)
        return res.status(200).json({status:200, data:ClasificacionList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las clasificaciones."})
    }
}