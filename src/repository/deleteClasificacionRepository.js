const Clasificacion = require("../models/Clasificacion")

exports.deleteClasificacion = async (id) =>{
    try{
        const clasificacion = await Clasificacion.findByPk(id)
        if (!clasificacion) {
            throw new Error(`Clasificación con ID ${id} no encontrada.`);
        }
        const deletedClasificacion = await clasificacion.destroy()
        return deletedClasificacion
    }catch(error){
        throw new Error(`Error al eliminar la clasificación: ${error.message}`);
    }

}