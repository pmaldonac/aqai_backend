const Marea = require("../models/Marea")

exports.getMareaRepository = async() =>{
    try{
        let mareaList = await Marea.findAll({
            attributes: ["id", "nombreCompania", "fechaInicio", "fechaFin"]
        })
        return mareaList
    }catch(error){
        throw new Error(`Error al obtener mareas: ${error.message}`);
    }
}