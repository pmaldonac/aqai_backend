const Faena = require("../models/Faena")

exports.updateFaenaRepository = async(id,data)=>{
    try{
        const faena = await Faena.findByPk(id)
        if (!faena) {
            throw new Error(`Faena con ID ${id} no encontrada.`);
        }
        const updatedFaena = await faena.update(data)
        return updatedFaena
    }catch(error){
        throw new Error(`Error al actualizar la Faena: ${error.message}`);
    }

}