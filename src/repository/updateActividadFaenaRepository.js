const ActividadFaena = require("../models/ActividadesFaena")

exports.updateActividadFaenaRepository = async(id,data)=>{
    try{
        const actividadFaena = await ActividadFaena.findByPk(id)
        if (!actividadFaena) {
            throw new Error(`ActividadFaena con ID ${id} no encontrada.`);
        }
        const updatedActividadFaena = await actividadFaena.update(data)
        return updatedActividadFaena
    }catch(error){
        throw new Error(`Error al actualizar la ActividadFaena: ${error.message}`);
    }

}