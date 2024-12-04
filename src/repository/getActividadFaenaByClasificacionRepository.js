const ActividadesFaena = require("../models/ActividadesFaena")

exports.getActicidadesFaenasByClasificacionRepository = async(idClasificacion) =>{
    try{
        let actividadesList = await ActividadesFaena.findAll({
            where:{
                idClasificacion: idClasificacion
            }
        })
        return actividadesList
    }catch(error){
        throw new Error(`Error al obtener actividades por clasificación: ${error.message}`);
    }
}