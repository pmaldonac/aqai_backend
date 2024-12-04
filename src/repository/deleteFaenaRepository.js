const Faena = require("../models/Faena")

exports.deleteFaenaRepository = async (id) =>{
    try{
        const faena = await Faena.findByPk(id)
        if (!faena) {
            throw new Error(`Faena con ID ${id} no encontrada.`);
        }
        const deletedFaena = await faena.destroy()
        return deletedFaena
    }catch(error){
        throw new Error(`Error al eliminar la faena: ${error.message}`);
    }

}