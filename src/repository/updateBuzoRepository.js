const Buzo = require("../models/Buzo")

exports.updateBuzoRepository = async(id,data)=>{
    try{
        const buzo = await Buzo.findByPk(id)
        if (!buzo) {
            throw new Error(`Buzo con ID ${id} no encontrado.`);
        }
        const updatedBuzo = await buzo.update(data)
        return updatedBuzo
    }catch(error){
        throw new Error(`Error al actualizar el Buzo: ${error.message}`);
    }

}