const repository = require("../repository/getClasificacionesRepository")

exports.getClasificacionesController = async(req,res) =>{
    try{
        let ClasificacionsList = await repository.getClasificacionRepository()
        return res.status(200).json({status:200, data:ClasificacionsList})
    }catch(error){
        return res.status(500).json({status:500, message: "Hubo un error al recuperar las clasificaciones."})
    }
}