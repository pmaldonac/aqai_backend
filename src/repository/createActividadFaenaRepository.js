const ActividadesFaena = require("../models/ActividadesFaena")

exports.createActivadesFaenaRepository = async(nombreActividad, esActivo, idClasificacion) => {
    try{
        const newActividadFaena = await ActividadesFaena.create(
            {
                nombreActividad,
                esActivo,
                idClasificacion
            },
            {
                fields:["nombreActividad", "esActivo", "idClasificacion" ]
            }
        )
        return newActividadFaena
    }catch(error){
        throw new Error(`Error al crear la Actividad: ${error.message}`);
    }
}