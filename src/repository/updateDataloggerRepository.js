const Datalogger = require("../models/Datalogger")

exports.updateDataloggerRepository = async(id,data)=>{
    try{
        const datalogger = await Datalogger.findByPk(id)
        if (!datalogger) {
            throw new Error(`Datalogger con ID ${id} no encontrado.`);
        }
        const updatedDatalogger = await datalogger.update(data)
        return updatedDatalogger
    }catch(error){
        throw new Error(`Error al actualizar la Datalogger: ${error.message}`);
    }

}