const Clasificacion = require("../models/Clasificacion")

exports.updateClasificacionRepository = async(id,data)=>{
    try{
        const clasificacion = await Clasificacion.findByPk(id)
        if (!clasificacion) {
            throw new Error(`Clasificación con ID ${id} no encontrada.`);
        }
        const updatedClasificacion = await clasificacion.update(data)
        return updatedClasificacion
    }catch(error){
        throw new Error(`Error al actualizar la Clasificación: ${error.message}`);
    }

}