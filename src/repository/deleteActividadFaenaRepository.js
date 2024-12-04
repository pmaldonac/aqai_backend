const ActividadesFaena = require("../models/ActividadesFaena")

exports.deleteActividadesFaena = async (id) =>{
    try{
        const actividadesFaena = await ActividadesFaena.findByPk(id)
        if (!actividadesFaena) {
            throw new Error(`ActividadesFaena con ID ${id} no encontrada.`);
        }
        const deletedActividadesFaena = await actividadesFaena.destroy()
        return deletedActividadesFaena
    }catch(error){
        throw new Error(`Error al eliminar ActividadesFaena: ${error.message}`);
    }

}