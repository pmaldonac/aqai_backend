const Marea = require("../models/Marea")

exports.updateMareaRepository = async(id,data)=>{
    try{
        const marea = await Marea.findByPk(id)
        if (!marea) {
            throw new Error(`Marea con ID ${id} no encontrada.`);
        }
        const updatedMarea = await marea.update(data)
        return updatedMarea
    }catch(error){
        throw new Error(`Error al actualizar la Marea: ${error.message}`);
    }

}