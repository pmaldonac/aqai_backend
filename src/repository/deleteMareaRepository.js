const Marea = require("../models/Marea")

exports.deleteMareaRepository = async (id) =>{
    try{
        const marea = await Marea.findByPk(id)
        if (!marea) {
            throw new Error(`Marea con ID ${id} no encontrada.`);
        }
        const deletedMarea = await marea.destroy()
        return deletedMarea
    }catch(error){
        throw new Error(`Error al eliminar la marea: ${error.message}`);
    }

}