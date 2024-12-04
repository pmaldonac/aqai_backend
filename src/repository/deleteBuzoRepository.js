const Buzo = require("../models/Buzo")

exports.deleteBuzo = async (id) =>{
    try{
        const buzo = await Buzo.findByPk(id)
        if (!buzo) {
            throw new Error(`Buzo con ID ${id} no encontrado.`);
        }

        const deletedBuzo = await buzo.destroy()
        return deletedBuzo
    }catch(error){
        throw new Error(`Error al eliminar el buzo: ${error.message}`);
    }

}