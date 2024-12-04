const Clasificacion = require("../models/Clasificacion")

exports.getClasificacionRepository = async() =>{
    try{
        let ClasificacionsList = await Clasificacion.findAll()
        return ClasificacionsList
    }catch(error){
        throw new Error(`Error al obtener clasificaciones: ${error.message}`);
    }
}