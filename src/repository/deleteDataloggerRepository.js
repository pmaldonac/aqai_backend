const Datalogger = require("../models/Datalogger")

exports.deleteDataloggerRepository = async (id) =>{
    try{
        const datalogger = await Datalogger.findByPk(id)
        if (!Datalogger) {
            throw new Error(`Datalogger con ID ${id} no encontrado.`);
        }
        const deletedDatalogger = await datalogger.destroy()
        return deletedDatalogger
    }catch(error){
        throw new Error(`Error al eliminar el Datalogger: ${error.message}`);
    }

}