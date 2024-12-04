const Clasificacion = require("../models/Clasificacion")

exports.createClasificacionRepository = async(nombreFaena, estaHabilitado) =>{
    try{
        let newClasificacion = await Clasificacion.create(
            {
                nombreFaena,
                estaHabilitado
            },
            {
                fields:["nombreFaena", "estaHabilitado"]
            }
        )
        return newClasificacion
    }catch(error){
        throw new Error(`Error al crear la Clasificación: ${error.message}`);
    }
}