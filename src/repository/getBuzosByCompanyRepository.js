const Buzo = require("../models/Buzo")

exports.getBuzoRepository = async(company) =>{
    try{
        const buzosList = await Buzo.findAll({
            where: {
              compania: company, 
            },
            attributes: ["id", "nombre", "apellido", "rut", "estaHabilitado"], 
          });
        return buzosList
    }catch(error){
        throw new Error(`Error al obtener Buzos: ${error.message}`);
    }
}